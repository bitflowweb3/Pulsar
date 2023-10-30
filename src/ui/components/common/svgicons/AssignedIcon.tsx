import { SvgContainer, SvgIconProps } from '../SvgIcon';

const AssignedIcon = ({
  stroke,
  strokeWidth,
  width,
  height,
}: SvgIconProps) => {
  return (
    <SvgContainer stroke={stroke} strokeWidth={strokeWidth}>
      <svg
        width='20'
        height='18'
        viewBox='0 0 20 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M19.0836 1.66684V7.16684M19.0836 7.16684H13.5836M19.0836 7.16684L14.8394 3.17018C13.5749 1.90494 11.9335 1.08493 10.1625 0.833724C8.39149 0.582518 6.58679 0.913722 5.02037 1.77743C3.45396 2.64113 2.21069 3.99055 1.47792 5.62232C0.745153 7.2541 0.56258 9.07983 0.957717 10.8244C1.35285 12.569 2.30429 14.1378 3.66866 15.2946C5.03302 16.4514 6.7364 17.1334 8.5221 17.2379C10.3078 17.3423 12.0791 16.8636 13.569 15.8738C15.059 14.884 16.1869 13.4368 16.7827 11.7502'
          stroke='#8B8B93'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </SvgContainer>
  );
};
export default AssignedIcon;
