import React from 'react';
import { MainPageContainer } from '../../../styles/global';
import {
  LoginContainer,
  LoginHeader,
  LoginPageContent,
  LoginMain,
  EmailDiv,
  PasswordDiv,
  CheckboxContainer,
  LoginButton,
  SocialLoginButton,
  GotoSignUp,
} from './styled';
import LoginLogoIcon from '../../components/common/svgicons/LoginLogoIcon';
import EmailIcon from '../../components/common/svgicons/EmailIcon';
import IconInput from '../../components/common/input/iconInput';
import { CheckBox } from '../../components/common/checkbox.tsx';
import GoogleIcon from '../../components/common/svgicons/GoogleIcon';
import PasswordInput from '../../components/common/password';

const LoginPage = () => {
  return (
    <MainPageContainer>
      <LoginContainer>
        <LoginPageContent>
          <LoginHeader>
            <LoginLogoIcon />
            <label>
              <strong>Log in to your account</strong>
            </label>
            <p>Welcome back! Please enter your details</p>
          </LoginHeader>
          <LoginMain>
            <EmailDiv>
              <label>Email</label>
              <IconInput Icon={EmailIcon} placeText='Enter your email' />
            </EmailDiv>
            <PasswordDiv>
              <label>Password</label>
              <PasswordInput />
            </PasswordDiv>
            <CheckboxContainer>
              <div>
                <CheckBox />
                <label>Remember for 30 days</label>
              </div>
              <label>Forgot password</label>
            </CheckboxContainer>
            <LoginButton className='button-primary'>Sign In</LoginButton>
            <SocialLoginButton>
              <GoogleIcon />
              <label>Sign in with Google</label>
            </SocialLoginButton>
            <GotoSignUp>
              <p>
                Don&apos;t have an account? <label>Sign up</label>
              </p>
            </GotoSignUp>
          </LoginMain>
        </LoginPageContent>
      </LoginContainer>
    </MainPageContainer>
  );
};
export default LoginPage;
