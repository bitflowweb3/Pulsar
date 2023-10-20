import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';

import 'antd/dist/antd.css';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Filler
);

const antIcon = <LoadingOutlined style={{ fontSize: 80 }} spin />;

const LineChart = () => {
  const [chartLoading, setIsChartsLoaded] = useState<boolean | undefined>();
  const [gradientColor, setGradientColor] = useState<any | undefined>();

  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Traffic 1',
        data: [65, 59, 80, 45, 67, 89, 90, 45, 60, 68, 43, 70],
        backgroundColor: gradientColor?.gradient1,
        borderColor: '#FC9272',
        borderWidth: 1,
        stepped: false,
        fill: true,
        spanGaps: false,
      },
      {
        label: 'Traffic 2',
        data: [90, 45, 60, 68, 43, 70, 65, 59, 80, 45, 67, 89],
        backgroundColor: gradientColor?.gradient2,
        borderColor: '#0D99FF',
        borderWidth: 1,
        stepped: false,
        fill: true,
        spanGaps: false,
      },
    ],
  };
  const trafficChartLine = (
    <Line
      id='chart'
      data={data}
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              tickLength: 0,
            },
            ticks: {
              padding: 8,
              color: '#969696',
              font: {
                size: 11,
              },
            },
            beginAtZero: true,
          },
          y: {
            min: 0, // Set the minimum value of the y-axis
            max: 100,
            beginAtZero: true,
            grid: {
              tickLength: 0,
              color: 'white',
              lineWidth: 1,
              drawTicks: true,
            },
            ticks: {
              color: '#969696',
              padding: 8,
              callback: function (value, index, ticks) {
                return value + 'G';
              },
            },
            border: {
              dash: [4, 6],
            },
          },
        },
        elements: {
          line: {
            tension: 0,
          },
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3,
          },
        },
      }}
    />
  );
  useEffect(() => {
    if (chartLoading) {
      const canvas = document.getElementById('chart') as HTMLCanvasElement;
      if (typeof document !== 'undefined') {
        if (canvas) {
          const ctx = canvas.getContext('2d');
          const gradient1 = ctx?.createLinearGradient(0, 0, 0, 300);
          gradient1?.addColorStop(0, 'rgba(255, 146, 114, 0.4)');
          gradient1?.addColorStop(1, 'rgba(0, 0, 0, 0)');

          const gradient2 = ctx?.createLinearGradient(0, 0, 0, 300);
          gradient2?.addColorStop(0, 'rgba(13, 153, 255, 0.4)');
          gradient2?.addColorStop(0.8, 'rgba(0, 0, 0, 0)');

          setGradientColor({ gradient1, gradient2 });
        }
      }
    }
  }, [chartLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChartsLoaded(true);
    }, 500); // Adjust the delay as needed

    return () => {
      clearTimeout(timer); // Clear the timer if the component unmounts
    };
  }, []);

  useEffect(() => {
    let timeoutId: any;

    function handleResize() {
      setIsChartsLoaded(false); // Set loading to true when resizing starts

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsChartsLoaded(true); // Set loading to false after resizing is complete
      }, 500); // Adjust the delay time as needed
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div style={{ height: '250px' }}>
        {chartLoading ? (
          trafficChartLine
        ) : (
          <div
              style={{
                height: '250px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              alignSelf: 'center',
              alignContent: 'center',
              justifyContent: 'center',
              justifySelf: 'center',
            }}
          >
            <Spin indicator={antIcon} style={{color: 'white'}}/>
          </div>
        )}
      </div>
    </>
  );
};

export default LineChart;
