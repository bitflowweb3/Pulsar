import TrafficPerServer from '../../components/cards/traffic-per-server';
import UpcomingPayments from '../../components/cards/upcoming-payments';
import TrafficChart from '../../components/charts/traffic-chart';
import TrafficTable from '../../components/lists/traffic-table';
import { MainPageContainer } from '../../../styles/global';
import { PageHeader, PaymentsMainContent } from './styled';
import PaymentAmount from '../../components/cards/payment-amount';
import PaymentInvoices from '../../components/cards/payment-invoices';

export default function PaymentsPage() {
  return (
    <MainPageContainer>
      <PageHeader>
        <h3>
          <strong>Payments</strong>
        </h3>
      </PageHeader>
      <PaymentsMainContent>
        <PaymentAmount />
        <PaymentInvoices />
      </PaymentsMainContent>
    </MainPageContainer>
  );
}
