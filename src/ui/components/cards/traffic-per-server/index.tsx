import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PrimaryButton from '../../common/button/PrimaryButton';
import {
  TrafficPerServerCard,
  TrafficMainContainer,
  MainContentDiv,
  RoundedComponent,
  AddServerButton,
  FooterDiv,
} from './styled';
import { Hr } from '../../common/Hr';
import ServerListItem from './server-list-item';

const servers = [
  { name: 'd2.c1.large', size: '200.14G' },
  { name: 'd1.c1.medium', size: '50.79G' },
  { name: 'd1.c2.medium', size: '25.55G' },
  { name: 's2.c2.small', size: '5.87G' },
];

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const TrafficPerServer = () => {
  return (
    <TrafficPerServerCard>
      <TrafficMainContainer>
        <header>
          <div>
            <label>Satatistics</label>
            <aside>Traffic Per Server</aside>
          </div>
        </header>
        <Hr />
        <MainContentDiv>
          <RoundedComponent>
            <aside>Total Commit</aside>
            <label>
              <strong>50G</strong>
            </label>
          </RoundedComponent>
          <aside>78% Utilized</aside>
          <div className='traffic-bar'>
            <p>5.5G</p>
            <p>3.4G</p>
            <p>2.1G</p>
          </div>
        </MainContentDiv>
        <FooterDiv>
          {servers.map((item) => (
            <ServerListItem servername={item.name} size={item.size} key={item.name} />
          ))}
        </FooterDiv>
      </TrafficMainContainer>

      <AddServerButton className='button-secondary'>Add Server</AddServerButton>
    </TrafficPerServerCard>
  );
};
export default TrafficPerServer;
