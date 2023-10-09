import { SvgContainer, SvgIconProps } from '../SvgIcon';

const ViewStatementIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  return (
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='18'
        height='14'
        viewBox='0 0 18 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5.33333 1.5H17.25M5.33333 7H17.25M5.33333 12.5H17.25M0.75 1.5H0.759167M0.75 7H0.759167M0.75 12.5H0.759167'
          stroke='#8B8B93'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default ViewStatementIcon;
