import { SvgContainer, SvgIconProps } from '../SvgIcon';

const TerminalIcon = ({ stroke, strokeWidth }: SvgIconProps) => {
  return (
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='16'
        height='14'
        viewBox='0 0 16 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1.33301 11.1666L6.33301 6.16663L1.33301 1.16663M7.99967 12.8333H14.6663'
          stroke='white'
          stroke-width='1.67'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default TerminalIcon;
