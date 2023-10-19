import React from 'react';
import styled from 'styled-components';
import { StyledCard } from '../../../components/cards/card-style';
import ChartBarIcon from '../../../components/common/svgicons/ChartBarIcon';
import { Color } from '../../../../constants/color';
import { Space } from '../../../../constants/size';
import { IconCardButton } from './server-details';
import PaymentsIcon from '../../../components/common/svgicons/PaymentsIcon';
import IpAddressesIcon from '../../../components/common/svgicons/IpAddressesIcon';

const IpCard = () => {
  return (
    <StyledCard style={{ flex: 1, maxHeight: 'calc(100% - 324px)' }}>
      <Header>
        <IpAddressesIcon stroke={Color.$white} />
        <label>Ip Addresses</label>
      </Header>
      <hr />
      <Body>
        <Info>
          <label>192.168.1.9</label>
          <label>Active</label>
        </Info>
        <hr />
        <Info>
          <label>192.168.1.9</label>
          <label>Active</label>
        </Info>
        <hr />
        <Info>
          <label>192.168.1.9</label>
          <label>Active</label>
        </Info>
        <hr />
        <Info>
          <label>192.168.1.9</label>
          <label>Active</label>
        </Info>
        <hr />
        <Info>
          <label>192.168.1.9</label>
          <label>Active</label>
        </Info>
        <hr />
        <Info>
          <label>192.168.1.9</label>
          <label>Active</label>
        </Info>
        <hr />
        <Info>
          <label>192.168.1.9</label>
          <label>Active</label>
        </Info>
        <hr />
        <Info>
          <label>192.168.1.9</label>
          <label>Active</label>
        </Info>
        <hr />
        <Info>
          <label>192.168.1.9</label>
          <label>Active</label>
        </Info>
        <hr />
        <Info>
          <label>192.168.1.9</label>
          <label>Active</label>
        </Info>
        <hr />
        <Info>
          <label>192.168.1.9</label>
          <label>Active</label>
        </Info>
      </Body>
      <hr />
      <ChangeBillingModelButton>
        <PaymentsIcon />
        Change Billing Model
      </ChangeBillingModelButton>
    </StyledCard>
  );
};
export default IpCard;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${Space.s};
  label {
    font-size: 18px;
    color: ${Color.$white};
  }
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.xxs};
  flex: 1;

  overflow-y: auto;
  padding-right: ${Space.s};
  /* max-height: 180px; */

  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--color-gray-400);
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-neutral-400);
  }

  hr {
    border-color: ${Color.$neutral_overlay};
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  label {
    font-size: 16px;
    &:first-child {
      color: ${Color.$white};
    }
    &:last-child {
      color: #50d1b2;
    }
  }
`;
const ChangeBillingModelButton = styled(IconCardButton)`
  justify-content: center;
`;
