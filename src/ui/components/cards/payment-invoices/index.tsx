import React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  Category,
  Header,
  InvoiceContainer,
  InvoiceDate,
  CategorySelect,
  CategorySelectContainer,
  InvoiceFilterDetails,
  StatusSelectContainer,
  StatusSelect,
  Filters,
} from './styled';
import CalendarIcon from '../../common/svgicons/CalendarIcon';
import FilterIcon from '../../common/svgicons/FilterIcon';
import InvoicesTable from '../../lists/invoices-table';

const PaymentInvoices = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <InvoiceContainer>
        <Header>
          <h3>
            <strong>Invoices</strong>
          </h3>
          <InvoiceDate>
            <CalendarIcon />
            <label>Feb 15, 2022 - Feb21, 2022</label>
          </InvoiceDate>
        </Header>
        <Category>
          <CategorySelectContainer>
            <CategorySelect id='category-select'>
              <option value='' selected>
                All Category
              </option>
              <option value='option1' style={{ padding: '10px' }}>
                Option 1
              </option>
              <option value='option2' style={{ padding: '10px' }}>
                Option 2
              </option>
              <option value='option3'>Option 3</option>
            </CategorySelect>
          </CategorySelectContainer>
          <InvoiceFilterDetails>
            <DemoItem label='Desktop variant'>
              <DesktopDatePicker defaultValue={dayjs('2022-04-17')} />
            </DemoItem>
            <StatusSelectContainer>
              <StatusSelect>
              <option value='' selected>
                Status
              </option>
              <option value='option1' style={{ padding: '10px' }}>
                Option 1
              </option>
              <option value='option2' style={{ padding: '10px' }}>
                Option 2
              </option>
              <option value='option3'>Option 3</option>
              </StatusSelect>
            </StatusSelectContainer>
            <Filters>
              <FilterIcon />
              <label>Filters</label>
            </Filters>
          </InvoiceFilterDetails>
        </Category>
        <InvoicesTable />
      </InvoiceContainer>
    </LocalizationProvider>
  );
};
export default PaymentInvoices;
