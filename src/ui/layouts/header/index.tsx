import React from 'react';
import Image from 'next/image'
import { useAppContext } from '../AppProvider';
import { TopBar, LogoContent, AuthContent } from './styled'
import CompanyLogo from '@/assets/images/company-logo.png';
import UserAvatar from '@/assets/icons/girl.png'
import AlarmIcon from '@/assets/icons/alarm-icon.svg'
import QustionIcon from '@/assets/icons/question-icon.svg'

const Header = () => {
    const { sidebarOpen, openSidebar, closeSidebar } = useAppContext();
    return (
        <TopBar>
            <LogoContent>
                <Image src={CompanyLogo} alt='Company Logo'/>
            </LogoContent>
            <AuthContent>
                <Image src={AlarmIcon} className='icon alarm-icon' alt='alarm'/>
                <Image src={QustionIcon} className='icon question-mark-icon' alt='about'/>
                <Image src={UserAvatar} className='icon user-avatar' alt='user'/>
            </AuthContent>
        </TopBar>
    )
}
export default Header;