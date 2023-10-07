import React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import ServerCell from './server-cell';
import StatusCell from './status-cell';
import CpuCell from './cpu-cell';
import ManageCell from './manage-cell';
import { TrafficTableContainer } from './styled';

interface Server {
  id: number;
  servers: {
    serverAddress: string;
    serverType: string;
  };
  status: boolean;
  location: string;
  os: string;
  cpu: number;
  disk: number;
  bandwidth: number;
  incoming?: number;
  outgoing?: number;
  manage: string;
}

const columnsMin: GridColDef<Server>[] = [
  {
    field: 'servers',
    headerName: 'Servers',
    width: 100,
    renderCell: (params: GridRenderCellParams<Server>) => {
      return (
        <ServerCell
          serverAddress={params.value.serverAddress as string}
          serverType={params.value.serverType as string}
        />
      );
    },
    flex: 1,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 70,
    renderCell: (params: GridRenderCellParams<Server>) => (
      <StatusCell status={params.value as boolean} />
    ),
    flex: 1,
  },
  { field: 'location', headerName: 'Location', width: 70, flex: 1 },
  { field: 'os', headerName: 'CPU Utilization', width: 110, flex: 1 },
  {
    field: 'cpu',
    headerName: 'RAM Utilization',
    width: 110,
    renderCell: (params: GridRenderCellParams<Server>) => (
      <CpuCell percentValue={params.value as number} />
    ),
    flex: 1,
  },
  {
    field: 'disk',
    headerName: 'Disk Utilization',
    renderCell: (params: GridRenderCellParams<Server>) => (
      <CpuCell percentValue={params.value as number} />
    ),
    width: 110,
    flex: 1,
  },
  {
    field: 'bandwidth',
    headerName: 'BandWidth Utilization',
    width: 150,
    flex: 1,
    renderCell: (params: GridRenderCellParams<Server>) => (
      <CpuCell percentValue={params.value as number} />
    ),
  },
  {
    field: 'manage',
    headerName: 'Manage',
    width: 110,
    flex: 1,
    renderCell: (params: GridRenderCellParams<Server>) => (
      <ManageCell status={params.value as boolean} />
    ),
  },
];
const columnsMax: GridColDef<Server>[] = [
  {
    field: 'servers',
    headerName: 'Servers',
    width: 100,
    renderCell: (params: GridRenderCellParams<Server>) => {
      return (
        <ServerCell
          serverAddress={params.value.serverAddress as string}
          serverType={params.value.serverType as string}
        />
      );
    },
    flex: 1,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 70,
    renderCell: (params: GridRenderCellParams<Server>) => (
      <StatusCell status={params.value as boolean} />
    ),
    flex: 1,
  },
  { field: 'location', headerName: 'Location', width: 70, flex: 1 },
  { field: 'os', headerName: 'CPU Utilization', width: 110, flex: 1 },
  {
    field: 'cpu',
    headerName: 'RAM Utilization',
    width: 110,
    renderCell: (params: GridRenderCellParams<Server>) => (
      <CpuCell percentValue={params.value as number} />
    ),
    flex: 1,
  },
  {
    field: 'disk',
    headerName: 'Disk Utilization',
    renderCell: (params: GridRenderCellParams<Server>) => (
      <CpuCell percentValue={params.value as number} />
    ),
    width: 110,
    flex: 1,
  },
  {
    field: 'bandwidth',
    headerName: 'BandWidth Utilization',
    width: 150,
    flex: 1,
    renderCell: (params: GridRenderCellParams<Server>) => (
      <CpuCell percentValue={params.value as number} />
    ),
  },
  {
    field: 'incoming',
    headerName: 'Incoming Traffic',
    width: 150,
    flex: 1,
    renderCell: (params: GridRenderCellParams<Server>) => (
      <CpuCell percentValue={params.value as number} />
    ),
  },
  {
    field: 'outgoing',
    headerName: 'Outgoing Traffic',
    width: 150,
    flex: 1,
    renderCell: (params: GridRenderCellParams<Server>) => (
      <CpuCell percentValue={params.value as number} />
    ),
  },
  {
    field: 'manage',
    headerName: 'Manage',
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
    servers: { serverAddress: '192.168.1.24', serverType: 'd1.c1.large' },
    status: true,
    location: 'Phoenix',
    os: 'Ubuntu',
    cpu: 10,
    disk: 80,
    bandwidth: 60,
    manage: false,
  },
  {
    id: 2,
    servers: { serverAddress: '192.168.1.23', serverType: 'd1.c2.medium' },
    status: false,
    location: 'Phoenix',
    os: 'Ubuntu',
    cpu: 10,
    disk: 30,
    bandwidth: 20,
    manage: true,
  },
  {
    id: 3,
    servers: { serverAddress: '192.168.1.22', serverType: 'd2.c1.medium' },
    status: true,
    location: 'Phoenix',
    os: 'Ubuntu',
    cpu: 30,
    disk: 70,
    bandwidth: 50,
    manage: true,
  },
];
const rowsMax = [
  {
    id: 1,
    servers: { serverAddress: '192.168.1.24', serverType: 'd1.c1.large' },
    status: true,
    location: 'Phoenix',
    os: 'Ubuntu',
    cpu: 10,
    disk: 80,
    bandwidth: 60,
    incoming: 50,
    outgoing: 30,
    manage: false,
  },
  {
    id: 2,
    servers: { serverAddress: '192.168.1.23', serverType: 'd1.c2.medium' },
    status: false,
    location: 'Phoenix',
    os: 'Ubuntu',
    cpu: 10,
    disk: 30,
    bandwidth: 20,
    incoming: 50,
    outgoing: 30,
    manage: true,
  },
  {
    id: 3,
    servers: { serverAddress: '192.168.1.22', serverType: 'd2.c1.medium' },
    status: true,
    location: 'Phoenix',
    os: 'Ubuntu',
    cpu: 30,
    disk: 70,
    bandwidth: 50,
    incoming: 50,
    outgoing: 30,
    manage: true,
  },
];

interface TrafficTableProps {
  isminimized: boolean;
}
const TrafficTable = ({ isminimized }: TrafficTableProps) => {
  return (
    <TrafficTableContainer isminimized={isminimized.toString()}>
      <div style={{ height: 1000, width: '100%' }}>
        {isminimized ? (
          /* @ts-ignore */
          <DataGrid rows={rowsMin} columns={columnsMin} />
        ) : (
          /* @ts-ignore */
          <DataGrid rows={rowsMax} columns={columnsMax} />
        )}
      </div>
    </TrafficTableContainer>
  );
};
export default TrafficTable;
