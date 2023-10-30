import styled from 'styled-components';
import { BorderRadius, Padding, Space } from '../../../constants/size';
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
  height: 100%;
`;
export const LandingPageLogoContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${Space.xl};
  height: 100%;
`;
export const LandingNavbar = styled.div`
  display: flex;
  height: 100%;
  /* gap: ${Space.l}; */
  a {
    padding: ${Space.l};    
    height: 100%;
    &:hover {
      /* background-color: ${Color.$black}; */
      color: ${Color.$brand_600};
    }
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
export const LoginButton = styled.button`
  color: ${Color.$white};
  font-size: 16px;
`;
export const SignupButton = styled.button`
  padding: ${Padding.xs} ${Padding.s};
  border-radius: ${BorderRadius.xxxl};
`
export const HeaderTab = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`