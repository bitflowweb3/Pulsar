import { MainPageContainer } from '../../../../styles/global';
import { PageHeader } from '../styled';
import styled from 'styled-components';
import { Space } from '../../../../constants/size';
import EarthIcon from '../../../components/common/svgicons/EarthIcon';
import { Color } from '../../../../constants/color';
import ServerDetails from './server-details';
import ServerUtilization from './server-utilization';
import BillingCard from './billing-card';
import IpCard from './ip-card';

export default function ServersPage() {
  return (
    <MainPageContainer>
      <PageHeader>
        <h3>
          <strong>{`192\u00d7168\u00d71\u00d7244`}</strong>
        </h3>
        <LabelDiv>
          <EarthIcon />
          <label>Location: ASHBURN US-EAST</label>
        </LabelDiv>
      </PageHeader>
      <ServersMainContent>
        <Main>
          <ServerDetails />
          <ServerUtilization />
        </Main>
        <RightSidebar>
          <BillingCard />
          <IpCard />
        </RightSidebar>
      </ServersMainContent>
    </MainPageContainer>
  );
}

const LabelDiv = styled.div`
  margin: ${Space.s} ${Space.none};
  display: flex;
  flex-direction: row;
  gap: ${Space.s};
  label {
    color: ${Color.$netural_700};
  }
`;

const ServersMainContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--space-base);
  overflow-y: auto;
  height: calc(100vh - 200px);
  padding-left: ${Space.sb};
  padding-right: ${Space.base};

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
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.base};
  flex: 1;
`
const RightSidebar = styled.div`
  min-height: 100%;
  max-height: 100%;
  flex-basis: 360px;
  gap: ${Space.base};
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`