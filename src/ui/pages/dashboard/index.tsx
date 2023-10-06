import TrafficPerServer from '../../../ui/components/cards/traffic-per-server';
import UpcomingPayments from '../../../ui/components/cards/upcoming-payments';
import TrafficChart from '../../../ui/components/charts/traffic-chart';
import TrafficTable from '../../../ui/components/lists/traffic-table';
import { MainPageContainer } from '../../../styles/global';
import { PageHeader, DashboardMainContent } from './styled';

export default function DashboardPage() {
  return (
    <MainPageContainer>
      <PageHeader>
        <h3>
          <strong>Dashboard</strong>
        </h3>
        <h6>January 1-30, 2023</h6>
      </PageHeader>
      <DashboardMainContent className='dashboard-content'>
        <section className='sub-content'>
          <TrafficChart />
          <TrafficTable isminimized={true} />
        </section>
        <section className='sub-content dashboard-right-sidebar'>
          <TrafficPerServer />
          <UpcomingPayments />
        </section>
      </DashboardMainContent>
    </MainPageContainer>
  );
}
