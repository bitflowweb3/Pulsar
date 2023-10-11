import { MainPageContainer } from '../../../styles/global';
import { IPAllocateButton, PageHeader, IPAddressesHeader, IPAddressesMainContent } from './styled';
import SearchComponent from '../../../ui/components/common/input/search';
import IPAddressesTable from '../../components/lists/ipaddress-table';

export default function ServersPage() {
  return (
    <MainPageContainer>
      <PageHeader>
        <h3>
          <strong>Servers</strong>
        </h3>
        <h6>January 1-30, 2023</h6>
      </PageHeader>
      <IPAddressesMainContent>
        <IPAddressesHeader>
          <SearchComponent />
          <IPAllocateButton className='button-secondary'>Allocate additional IPs</IPAllocateButton>
        </IPAddressesHeader>
        <IPAddressesTable />
      </IPAddressesMainContent>
    </MainPageContainer>
  );
}