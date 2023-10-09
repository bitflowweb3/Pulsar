import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import DashboardIcon from '../svgicons/DashboardIcon';
import ServersIcon from '../svgicons/ServersIcon';
import PaymentsIcon from '../svgicons/PaymentsIcon';
import SettingsIcon from '../svgicons/SettingsIcon';
import IpAddressesIcon from '../svgicons/IpAddressesIcon';
import { Color } from '../../../../constants/color';

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
  { name: 'IP Addresses', icon: IpAddressesIcon, route: 'ipaddresses' },
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
          {pages.map(({name, icon: Icon, route}, index) => {
              if (currentTab === index) {
                  return (
                      <TabButton
                          className='button-primary'
                          key={name}
                          onClick={() => {
                              setCurrentTab(index);
                          }}
                      >
                          <Icon stroke='white' strokeWidth='2' />
                          <span>{name}</span>
                      </TabButton>
                  )
              }
              else {
                  return (
                      <TabButtonNone
                          key={name}
                          onClick={() => {
                              setCurrentTab(index);
                          }}
                      >
                          <Icon stroke='#8A8A98' strokeWidth='1' />
                          <span>{name}</span>
                      </TabButtonNone>
                  );
              }
      })}
    </TabsGroup>
  );
};
export default TabButtonGroup;
