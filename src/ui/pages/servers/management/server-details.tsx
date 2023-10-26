import React from 'react';
import styled from 'styled-components';
import { BorderRadius, Padding, Space } from '../../../../constants/size';
import { Color } from '../../../../constants/color';
import ServersIcon from '../../../components/common/svgicons/ServersIcon';
import TerminalIcon from '../../../components/common/svgicons/TerminalIcon';
import ArrowDownIcon from '../../../components/common/svgicons/ArrowDownIcon';
import AlertOctagonIcon from '../../../components/common/svgicons/AlertOctagon';
import PowerCycleIcon from '../../../components/common/svgicons/PowerCycleIcon';

const ServerDetails = () => {
  return (
    <ServerDetailsDiv>
      <Header>
        <Title>
          <IconDiv>
            <ServersIcon stroke='#fff' />
          </IconDiv>
          <h2>Server Details</h2>
          <label>Powered On</label>
        </Title>
        <HeaderButtonGroup>
          <IconCardButton>
            <TerminalIcon stroke={Color.$white} />
            Open Console
          </IconCardButton>
          <IconCardButton>
            <PowerCycleIcon stroke='#fff' />
            Power Actions&nbsp;&nbsp;&nbsp;
            <ArrowDownIcon stroke={Color.$white} />
          </IconCardButton>
          <IconCardButton style={{ padding: '8px' }}>
            <AlertOctagonIcon stroke={Color.$white} />
          </IconCardButton>
        </HeaderButtonGroup>
      </Header>
      <Body>
        <DetailInfo>
          <label>{`24C \u00d7 2.9GHz`}</label>
          <label>CPU</label>
        </DetailInfo>
        <DetailInfo>
          <label>{`256GB DDR4`}</label>
          <label>RAM</label>
        </DetailInfo>
        <DetailInfo>
          <label>{`Ubuntu Focal`}</label>
          <label>OS</label>
        </DetailInfo>
        <DetailInfo>
          <label>{`d2.c2.large`}</label>
          <label>Type</label>
        </DetailInfo>
        <DetailInfo>
          <label>{`2\u00d7 2TB NVME`}</label>
          <label>CPU</label>
        </DetailInfo>
        <DetailInfo>
          <label>{`Sep 15, 2023`}</label>
          <label>Created</label>
        </DetailInfo>
        <DetailInfo>
          <label>{`385 days`}</label>
          <label>Uptime</label>
        </DetailInfo>
      </Body>
    </ServerDetailsDiv>
  );
};
export default ServerDetails;

export const ServerDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.l};
  border-radius: ${BorderRadius.l};
  background-color: ${Color.$neutral_foreground};
  padding: ${Padding.base};
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Body = styled.div`
  display: flex;
  flex-direction: row;
`;
const DetailInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${Space.xs};
  label {
    font-size: 14px;
    color: ${Color.$white};
    &:last-child {
        color: ${Color.$netural_700};
    }
  }
`;
const HeaderButtonGroup = styled.div`
  display: flex;
  flex-direction: ${Space.base};
  align-items: center;
  gap: ${Space.base};
`;
export const Title = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${Space.s};
  align-items: flex-start;
  label {
    color: white;
  }
  h2 {
    /* line-height: 0; */
  }
`;
export const IconDiv = styled.div`
  margin-top: ${Space.xs};
`;

export const CardButton = styled.button`
  border-radius: ${BorderRadius.xxl};
  border: solid 1px ${Color.$gray_600};
  padding: ${Space.s} ${Space.base};
`;
export const IconCardButton = styled(CardButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${Space.s};
  color: white;
`;
