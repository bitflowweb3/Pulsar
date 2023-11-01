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
  HeaderTab,
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
import ArrowDownIcon from '../../components/common/svgicons/ArrowDownIcon';
import { Color } from '../../../constants/color';

interface LayoutProps {
  auth: AuthContextProps | null;
  account: AccountProviderProps | null;
}
const Header = ({ auth, account }: LayoutProps) => {
  const router = useRouter();

  const [isAccountPage, setIsAccountPage] = useState<boolean | undefined>(
    undefined
  );
  const [isLogined, setIsLogined] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    setIsAccountPage(account?.isAccountPage);
    setIsLogined(auth?.isAuthenticated);
  }, [account, auth]);

  const products = [
    { label: 'Overview', key: 'item-1' }, // remember to pass the key prop
    { label: 'Featues', key: 'item-2' },
    { label: 'Solutions', key: 'item-3' },
    { label: 'Tutorials', key: 'item-4' },
    { label: 'Pricing', key: 'item-5' },
  ];
  const resources = [
    { label: 'Blog', key: 'item-1' }, // remember to pass the key prop
    { label: 'Newsletter', key: 'item-2' },
    { label: 'Events', key: 'item-3' },
    { label: 'Help centre', key: 'item-4' },
    { label: 'Support', key: 'item-5' },
  ];

  const Logout = () => {
    setAccessToken(null);
    router.push('/login');
  };

  const userMenu = (
    <Menu>
      <Menu.Item>
        <Link href='temp'>Profile</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href='dashboard'>My Account</Link>
      </Menu.Item>
      <Menu.Item onClick={Logout}>Log out</Menu.Item>
    </Menu>
  );

  return (
    <TopBar>
      <LogoContent>
        {isAccountPage ? (
          <Link href='/price'>
            <Image src={CompanyLogo} alt='Company Logo' />
          </Link>
        ) : (
          <LandingPageLogoContent>
            <Image src={LandingLogo} alt='landing-logo' />
            <LandingNavbar>
              <Link href='/price'>Home</Link>
              <Dropdown menu={{ items: products }} trigger={['hover']}>
                <Link href='/price'>
                  <HeaderTab>
                    Products&nbsp;&nbsp;
                    <ArrowDownIcon stroke={Color.$white} />
                  </HeaderTab>
                </Link>
              </Dropdown>
              <Dropdown menu={{ items: resources }} trigger={['hover']}>
                <Link href='/price'>
                  <HeaderTab>
                    Resources&nbsp;&nbsp;
                    <ArrowDownIcon stroke={Color.$white} />
                  </HeaderTab>
                </Link>
              </Dropdown>
              <Link href='/price'>Pricing</Link>
            </LandingNavbar>
          </LandingPageLogoContent>
        )}
      </LogoContent>
      {!isLogined ? (
        <AuthContent>
          <Link href='/login'>
            <LoginButton>Log in</LoginButton>
          </Link>
          <SignupButton className='button-secondary'>Sign up</SignupButton>
        </AuthContent>
      ) : (
        <AuthContent>
          <Image src={AlarmIcon} className='icon alarm-icon' alt='alarm' />
          <Image
            src={QustionIcon}
            className='icon question-mark-icon'
            alt='about'
          />
          <Dropdown overlay={userMenu} trigger={['click']}>
            <Link href='/price'>
              <Image src={UserAvatar} className='icon user-avatar' alt='user' />
            </Link>
          </Dropdown>
        </AuthContent>
      )}
    </TopBar>
  );
};
export default Header;
