import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import DashboardIcon from '../../../../assets/icons/dashboard-icon.svg';
import ServersIcon from '../../../../assets/icons/servers-icon.svg';
import PaymentsIcon from '../../../../assets/icons/payments-icon.svg';
import SettingsIcon from '../../../../assets/icons/settings-icon.svg';
import { Color } from '@/constants/color';

const TabsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--padding-xs);
`;
const TabButton = styled.button`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: var(--padding-s);
  border-radius: 48px;
  padding: var(--padding-s) var(--padding-base);
`;
const TabButtonNone = styled.button`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: var(--padding-s);
  padding: var(--padding-s) var(--padding-base);

  & > span {
    color: var(--color-gray-400);
  }
  & > .button {
    filter: brightness(50%);
  }
  &:hover {
    background-color: ${Color.$dark_card_bright};
  }
`;
const enum PageTabs {
  Dashboard = 'Dashboard',
  Servers = 'Servers',
  IPAddress = 'IP Addresses',
  Payments = 'Payments',
  Settings = 'Settings',
}

const pages = [
  { name: 'Dashboard', icon: DashboardIcon, route: 'dashboard' },
  { name: 'Servers', icon: ServersIcon, route: 'servers' },
  { name: 'IP Addresses', icon: DashboardIcon, route: 'ipaddresses' },
  { name: 'Payments', icon: PaymentsIcon, route: 'payments' },
  { name: 'Settings', icon: SettingsIcon, route: 'settings' },
];

const TabButtonGroup = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const router = useRouter();

    useEffect(() => {
        router.push(pages[currentTab].route)
    }, [currentTab]);

  return (
    <TabsGroup>
          {pages.map((item, index) => {
              if (currentTab === index) {
                  return (
                      <TabButton
                          className='button-primary'
                          key={item.name}
                          onClick={() => {
                              setCurrentTab(index);
                          }}
                      >
                          <Image src={item.icon} alt={`${item.name}-icon`} />
                          <span>{item.name}</span>
                      </TabButton>
                  )
              }
              else {
                  return (
                      <TabButtonNone
                          key={item.name}
                          onClick={() => {
                              setCurrentTab(index);
                          }}
                      >
                          <Image src={item.icon} alt={`${item.name}-icon`} />
                          <span>{item.name}</span>
                      </TabButtonNone>
                  );
              }
      })}
    </TabsGroup>
  );
};
export default TabButtonGroup;
