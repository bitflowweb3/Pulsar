import { SvgContainer, SvgIconProps } from '../SvgIcon';

const AlertOctagonIcon = ({ stroke, strokeWidth, width, height }: SvgIconProps) => {
  return (
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width={width??'20'}
        height={height??'20'}
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M10.0003 6.66663V9.99996M10.0003 13.3333H10.0087M6.55033 1.66663H13.4503L18.3337 6.54996V13.45L13.4503 18.3333H6.55033L1.66699 13.45V6.54996L6.55033 1.66663Z'
          stroke='white'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default AlertOctagonIcon;
