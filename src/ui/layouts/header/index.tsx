import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AccountProviderProps } from '../AccountProvider';
import {
  TopBar,
  LogoContent,
  AuthContent,
  LandingPageLogoContent,
  LandingNavbar,
  LoginButton,
  SignupButton,
} from './styled';
import CompanyLogo from '../../../assets/images/company-logo.png';
import LandingLogo from '../../../assets/images/landing-logo.png';
import UserAvatar from '../../../assets/icons/girl.png';
import AlarmIcon from '../../../assets/icons/alarm-icon.svg';
import QustionIcon from '../../../assets/icons/question-icon.svg';
import { AuthContextProps } from '../../../auth/AuthProvider';
import Link from 'next/link';
import 'antd/dist/antd.css';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import { setAccessToken } from '../../../services/auth';
import { useRouter } from 'next/router';


interface LayoutProps {
  auth: AuthContextProps | null;
  account: AccountProviderProps | null;
}
const Header = ({ auth, account }: LayoutProps) => {

  const router = useRouter();

  const [isAccountPage, setIsAccountPage] = useState<boolean | undefined>(
    undefined
  );
  const [isLogined, setIsLogined] = useState<boolean | undefined>();

  useEffect(() => {
    setIsAccountPage(account?.isAccountPage);
    setIsLogined(auth?.isAuthenticated);
  }, [account, auth]);

  const items = [
    { label: 'item 1', key: 'item-1' }, // remember to pass the key prop
    { label: 'item 2', key: 'item-2' },
  ];

  const Logout = () => {
    setAccessToken(null);
    router.push('/login');
  }
  
  const userMenu = (
    <Menu>
      <Menu.Item><Link href='temp'>Profile</Link></Menu.Item>
      <Menu.Item><Link href='dashboard'>My Account</Link></Menu.Item>
      <Menu.Item onClick={Logout}>Log out</Menu.Item>
    </Menu>
  );

  return (
    <TopBar>
      <LogoContent>
        {isAccountPage ? (
          <Image src={CompanyLogo} alt='Company Logo' />
        ) : (
          <LandingPageLogoContent>
            <Image src={LandingLogo} alt='landing-logo' />
            <LandingNavbar>
              <Link href='/price'>Home</Link>
              <Dropdown menu={{ items }} trigger={['hover']}>
                <Link href='/price'>
                  Products&nbsp;&nbsp;
                  <DownOutlined
                    style={{ strokeWidth: '2px', fontSize: '13px' }}
                  />
                </Link>
              </Dropdown>
              <Dropdown menu={{ items }} trigger={['hover']}>
                <Link href='/price'>
                  Resources&nbsp;&nbsp;
                  <DownOutlined
                    style={{ strokeWidth: '2px', fontSize: '13px' }}
                  />
                </Link>
              </Dropdown>
              <Link href='/price'>Pricing</Link>
            </LandingNavbar>
          </LandingPageLogoContent>
        )}
      </LogoContent>
      {isLogined ? (
        <AuthContent>
          <Image src={AlarmIcon} className='icon alarm-icon' alt='alarm' />
          <Image
            src={QustionIcon}
            className='icon question-mark-icon'
            alt='about'
            />
            <Dropdown overlay={ userMenu } trigger={['click']}>
                <Link href='/price'>
                <Image src={UserAvatar} className='icon user-avatar' alt='user' />
                </Link>
              </Dropdown>
        </AuthContent>
      ): (
        <AuthContent>
          <Link href='/login'>
            <LoginButton>Log in</LoginButton>
          </Link>
          <SignupButton className='button-primary'>Sign up</SignupButton>
        </AuthContent>
      )}
    </TopBar>
  );
};
export default Header;
