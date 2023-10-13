import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useAccount } from '../AccountProvider';
import {
  TopBar,
  LogoContent,
  AuthContent,
  LandingPageLogoContent,
  LandingNavbar,
} from './styled';
import CompanyLogo from '../../../assets/images/company-logo.png';
import LandingLogo from '../../../assets/images/landing-logo.png';
import UserAvatar from '../../../assets/icons/girl.png';
import AlarmIcon from '../../../assets/icons/alarm-icon.svg';
import QustionIcon from '../../../assets/icons/question-icon.svg';

const Header = () => {
  const acount = useAccount();
  const [isAccountPage, setIsAccountPage] = useState<boolean | undefined>(
    undefined
  );
  useEffect(() => {
    setIsAccountPage(acount?.isAccountPage);
  }, []);
  return (
    <TopBar>
      <LogoContent>
        {isAccountPage ? (
          <Image src={CompanyLogo} alt='Company Logo' />
        ) : (
          <LandingPageLogoContent>
            <Image src={LandingLogo} alt='landing-logo' />
            <LandingNavbar>
              <label>Home</label>
              <label>Products</label>
              <label>Resources</label>
              <label>Pricing</label>
            </LandingNavbar>
          </LandingPageLogoContent>
        )}
      </LogoContent>
      <AuthContent>
        <Image src={AlarmIcon} className='icon alarm-icon' alt='alarm' />
        <Image
          src={QustionIcon}
          className='icon question-mark-icon'
          alt='about'
        />
        <Image src={UserAvatar} className='icon user-avatar' alt='user' />
      </AuthContent>
    </TopBar>
  );
};
export default Header;
