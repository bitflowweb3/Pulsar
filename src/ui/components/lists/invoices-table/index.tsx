import React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import StatusCell from './status-cell';
import ManageCell from './manage-cell';
import { TrafficTableContainer } from './styled';

interface Server {
  id: number;
  invoiceId: string;
  date: string;
  amount: string;
  paidWith: string;
  status: boolean
  actions: string;
}

const columnsMin: GridColDef<Server>[] = [
  { field: 'invoiceId', headerName: 'Invoice ID', width: 100, flex: 1 },
  { field: 'date', headerName: 'Date', width: 110, flex: 1 },
  { field: 'amount', headerName: 'Amount', width: 110, flex: 1 },
  { field: 'paidWith', headerName: 'Amount', width: 110, flex: 1 },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    renderCell: (params: GridRenderCellParams<Server>) => (
      <StatusCell status={params.value as boolean} />
    ),
    flex: 1,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 110,
    flex: 1,
    renderCell: (params: GridRenderCellParams<Server>) => (
      <ManageCell status={params.value as boolean} />
    ),
  },
];

const rowsMin = [
  {
    id: 1,
    invoiceId: '#25413',
    date: '17 Oct, 2022',
    amount: '$2485',
    paidWith: 'Visa ending in 1526',
    status: true,
    actions: true,
  },
  {
    id: 2,
    invoiceId: '#25413',
    date: '17 Oct, 2022',
    amount: '$2485',
    paidWith: 'Visa ending in 1526',
    status: false,
    actions: true,
  },
  {
    id: 3,
    invoiceId: '#25413',
    date: '17 Oct, 2022',
    amount: '$2485',
    paidWith: 'Visa ending in 1526',
    status: true,
    actions: true,
  },
  
];

const InvoicesTable = () => {
  return (
    <TrafficTableContainer>
      <div style={{ height: 1000, width: '100%' }}>
          {/* @ts-ignore */ }
          <DataGrid rows={rowsMin} columns={columnsMin} />

      </div>
    </TrafficTableContainer>
  );
};
export default InvoicesTable;
