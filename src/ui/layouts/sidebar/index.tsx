import React from 'react';
import Image from 'next/image';
import {
  SidebarDiv,
  TabsGroup,
  TabButton,
  TabButtonNone,
  ProContent,
  ProAccountDiv,
  UpgradeContentDiv,
  UpgradeButton,
  ToggleDiv,
  ToggleContent,
  Hr,
} from './styled';
import DashboardIcon from '../../../assets/icons/dashboard-icon.svg';
import ServersIcon from '../../../assets/icons/servers-icon.svg';
import PaymentsIcon from '../../../assets/icons/payments-icon.svg';
import SettingsIcon from '../../../assets/icons/settings-icon.svg';
import CityIcon from '../../../assets/icons/city-icon.svg';
import ProMaskIcon1 from '../../../assets/icons/pro-mask-1.svg';
import ProMaskIcon2 from '../../../assets/icons/pro-mask-2.svg';
import UpGradeImage from '../../../assets/images/upgrade.png';
import UserPassageIcon from '../../../assets/icons/user-passage-icon.svg';
import UpgrademaskIcon from '../../../assets/images/upgrade-mask.png';
import MoonImage from '../../../assets/images/moon.png';
import SettingIcon from '../../../assets/icons/setting-icon.png';
import MaximizeIcon from '../../../assets/icons/maximize-icon.png'
import Switch from '@mui/material/Switch';


const Sidebar = () => {
  return (
    <SidebarDiv>
      <TabsGroup>
        <TabButton className='button-primary'>
          <Image src={DashboardIcon} alt='dashboard-icon' />
          <span>Dashboard</span>
        </TabButton>
        <TabButtonNone className='button'>
          <Image src={ServersIcon} alt='dashboard-icon' />
          <span>Servers</span>
        </TabButtonNone>
        <TabButtonNone className='button'>
          <Image src={PaymentsIcon} alt='dashboard-icon' />
          <span>Payments</span>
        </TabButtonNone>
        <TabButtonNone className='button'>
          <Image src={SettingsIcon} alt='dashboard-icon' />
          <span>Settings</span>
        </TabButtonNone>
      </TabsGroup>
      <ProContent>
        <hr />
        <ProAccountDiv>
          <Image
            src={ProMaskIcon1}
            className='pro-mask-1-icon'
            alt='pro-mask-1'
          />
          <Image
            src={ProMaskIcon2}
            className='pro-mask-2-icon'
            alt='pro-mask-2'
          />
          <h6>
            <strong>Go to Pro</strong>
          </h6>
          <p>
            Get access to all <br />
            features on Pro account
          </p>
          <Image src={CityIcon} className='city-icon' alt='city-icon' />
        </ProAccountDiv>
        <UpgradeContentDiv>
          <Image
            src={UpGradeImage}
            className='upgrade-image'
            alt='upgrade-image'
          />
          <Image
            src={UpgrademaskIcon}
            className='upgrade-mask-icon'
            alt='upgrade-mask-icon'
          />
          <Image
            src={UserPassageIcon}
            className='user-passage-icon'
            alt='user-passage-icon'
          />
          <p>
            Need help managing your servers? Add the{' '}
            <strong>Support Plan</strong> now!
          </p>
          <UpgradeButton className='button-primary'>
            <strong>Upgrade Now</strong>
          </UpgradeButton>
        </UpgradeContentDiv>
        <ToggleDiv>
          <ToggleContent>
          <Image src={MoonImage} className='moon-image' alt='moon-image' />
          <Switch defaultChecked />
          <Image src={SettingIcon} alt='setting-icon' />
          </ToggleContent>
          <Hr />
          <Image src={MaximizeIcon} alt='maximize-icon' />
        </ToggleDiv>
      </ProContent>
    </SidebarDiv>
  );
};
export default Sidebar;
