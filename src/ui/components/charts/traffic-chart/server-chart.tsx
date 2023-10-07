import React from 'react';
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

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Filler
);
let canvas;
if (typeof document !== 'undefined') {
  canvas = document.getElementById('chart') as HTMLCanvasElement;
  
  // Manipulating the DOM here
}

const ctx = canvas?.getContext('2d');

const gradient1 = ctx?.createLinearGradient(0, 0, 0, 300);
gradient1?.addColorStop(0, 'rgba(255, 146, 114, 0.4)');
gradient1?.addColorStop(1, 'rgba(0, 0, 0, 0)');

const gradient2 = ctx?.createLinearGradient(0, 0, 0, 300);
gradient2?.addColorStop(0, 'rgba(13, 153, 255, 0.4)');
gradient2?.addColorStop(0.8, 'rgba(0, 0, 0, 0)');

const LineChart = () => {
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
        backgroundColor: gradient1,
        borderColor: '#FC9272',
        borderWidth: 1,
        stepped: false,
        fill: true,
        spanGaps: false,
      },
      {
        label: 'Traffic 2',
        data: [90, 45, 60, 68, 43, 70, 65, 59, 80, 45, 67, 89],
        backgroundColor: gradient2,
        borderColor: '#0D99FF',
        borderWidth: 1,
        stepped: false,
        fill: true,
        spanGaps: false,
      },
    ],
  };
  return (
    <>
      <div style={{ height: '250px'}}>
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
                  tickLength: 0
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
      </div>
    </>
  );
};

export default LineChart;
