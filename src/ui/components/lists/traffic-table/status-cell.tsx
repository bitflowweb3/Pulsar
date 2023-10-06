import { StatusCellDiv, CircleIconDiv } from './styled';

interface StatusCellProps {
  status: boolean;
}

const StatusCell = ({ status }: StatusCellProps) => {
  return (
    <StatusCellDiv condition={status}>
      <CircleIconDiv condition={status} />
      <label>{status ? 'ON' : 'OFF'}</label>
    </StatusCellDiv>
  );
};
export default StatusCell;
