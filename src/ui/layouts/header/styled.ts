import styled from 'styled-components';
import { Space } from '../../../constants/size';
import { Color } from '../../../constants/color';

export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  padding: var(--padding-none) var(--padding-base);
  justify-content: space-between;
  background-color: var(--color-primary);
  align-items: center;
  height: 60px;
`;
export const LogoContent = styled.div`
  padding: var(--padding-none) var(--padding-base);
`;
export const LandingPageLogoContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: ${Space.xl};
`;
export const LandingNavbar = styled.div`
  display: flex;
  align-items: flex-end;
  gap: ${Space.l};
  label {
    font-size: 16px;
    color: ${Color.$white};
  }
`;
export const AuthContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: center;
`;
