import React from 'react';
import PeriodButtonGroup from './button-group';
import LineChart from './server-chart';
import {
  TrafficChartContainer,
  TrafficChartHeader,
  HeaderTextDiv,
  HeaderDateDiv,
  MonthButton,
  Divider,
  Footer,
} from './styled';
const TrafficChart = () => {
  return (
    <TrafficChartContainer>
      <TrafficChartHeader>
        <HeaderTextDiv>
          <h6>Acitivity</h6>
          <h4>
            <strong>Total Traffic</strong>
          </h4>
        </HeaderTextDiv>
        <HeaderDateDiv>
          <PeriodButtonGroup />
          <MonthButton className='button-secondary'>January, 2023</MonthButton>
        </HeaderDateDiv>
      </TrafficChartHeader>
      <Divider />
      <LineChart />
      <Footer>
        <span>Traffic</span>
        <Divider />
        <section>
          <span>Incoming</span>
          <span>Outgoing</span>
        </section>
        <section>
          <label><strong>300G</strong></label>
          <label><strong>200G</strong></label>
        </section>
      </Footer>
    </TrafficChartContainer>
  );
};
export default TrafficChart;
