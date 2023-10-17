import React from 'react';
import {
  Body,
  Header,
  PerformanceDiv,
  SubscribeBorderContent,
  SubscribeButton,
  SubscribePriceContent,
} from './styled';
import FilledSuccessIcon from '../../common/svgicons/FilledSuccessIcon';

const SubscribePriceCard = () => {
  return (
    <SubscribePriceContent>
      <SubscribeBorderContent>
        <Header>
          <h1>$100</h1>
          <label>Basic Plan</label>
          <label>Billed monthly</label>
        </Header>
        <Body>
          <PerformanceDiv>
            <FilledSuccessIcon />
            <label>4 Cores @ 2.90GHz</label>
          </PerformanceDiv>
          <PerformanceDiv>
            <FilledSuccessIcon />
            <label>2TB NVME SSD</label>
          </PerformanceDiv>
          <PerformanceDiv>
            <FilledSuccessIcon />
            <label>16GB RAM</label>
          </PerformanceDiv>
          <PerformanceDiv>
            <FilledSuccessIcon />
            <label>1 Dedicated IP Address</label>
          </PerformanceDiv>
          <PerformanceDiv>
            <FilledSuccessIcon />
            <label>10GB Commit</label>
          </PerformanceDiv>
        </Body>
        <SubscribeButton className='button-primary'>
          Get started
        </SubscribeButton>
      </SubscribeBorderContent>
    </SubscribePriceContent>
  );
};
export default SubscribePriceCard;
