import TrafficPerServer from '../../components/cards/traffic-per-server';
import UpcomingPayments from '../../components/cards/upcoming-payments';
import TrafficChart from '../../components/charts/traffic-chart';
import TrafficTable from '../../components/lists/traffic-table';
import { MainPageContainer } from '../../../styles/global';
import { PageHeader, DashboardMainContent } from './styled';

export default function PaymentsPage() {
  return (
    <MainPageContainer>
      <PageHeader>
        <h3>
          <strong>Payments</strong>
        </h3>
        <h6>January 1-30, 2023</h6>
      </PageHeader>
      <DashboardMainContent className='dashboard-content flex justify-center pt-9'>
       <h1>Coming Soon</h1>
      </DashboardMainContent>
    </MainPageContainer>
  );
}
