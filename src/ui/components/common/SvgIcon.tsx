import { styled } from 'styled-components';

export interface SvgIconProps {
    stroke?: string;
    strokeWidth?: string;
}

const SvgContainer = styled.div<SvgIconProps>`
    svg > path {
        stroke: ${props => props.stroke};
        stroke-width: ${props => props.strokeWidth};
    }    
`
export { SvgContainer };
