import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Hr } from '../../../common/Hr';
import ServersIcon from '../../../common/svgicons/ServersIcon';
import BillingIcon from '../../../common/svgicons/BillingIcon';
import ViewStatementIcon from '../../../common/svgicons/ViewStatementIcon';
import IpAddressesIcon from '../../../common/svgicons/IpAddressesIcon';
import PowerCycleIcon from '../../../common/svgicons/PowerCycleIcon';
import TrashIcon from '../../../common/svgicons/TrashIcon';
import styled from 'styled-components';
import { Space } from '../../../../../constants/size';
import { Color } from '../../../../../constants/color';

const MenuItemPowerCycleDiv = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  padding: ${Space.xxs} ${Space.xs};
  gap: ${Space.s};
  width: 100%;
  height: 100%;
  align-items: center;
  label {
    color: ${Color.$error_400};
  }
  &:hover {
    label {
      color: ${Color.$error_700};
      font-weight: 600;
    }
    svg > path {
      stroke-width: 2;
      stroke: ${Color.$error_700};
    }
  }
`;

const MenuItemDiv = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  padding: ${Space.xxs} ${Space.xs};
  gap: ${Space.s};
  align-items: center;
  &:hover {
    label {
      color: ${Color.$white};
    }
    svg > path {
      stroke-width: 2;
      stroke: white;
    }
  }
`;



export default function DropdownMenu(props: any) {
  const { anchorEl, setAnchorEl } = props;
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Menu
      id='basic-menu'
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem onClick={handleClose}>
        <MenuItemDiv>
          <BillingIcon />
          <label>Change Billing</label>
        </MenuItemDiv>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <MenuItemDiv>
          <ServersIcon width={18} height={18} />
          <label>Manage Server</label>
        </MenuItemDiv>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <MenuItemDiv>
          <IpAddressesIcon width={18} height={16} />
          <label>Ip Addresses</label>
        </MenuItemDiv>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <MenuItemDiv>
          <ViewStatementIcon width={20} height={20} stroke='#8B8B93' strokeWidth='1.5'/>
          <label>View Statements</label>
        </MenuItemDiv>
      </MenuItem>
      <Hr style={{ marginLeft: '12px', marginRight: '12px', marginTop: '8px', marginBottom: '12px', borderColor: '#475467'}} />
      <MenuItem onClick={handleClose}>
        <MenuItemPowerCycleDiv id='power-cycle'>
          <PowerCycleIcon width={18} height={18} strokeWidth='1.5' stroke='#ED4C4D' />
          <label style={{ marginTop: '2px'}}>Power Cycle</label>
        </MenuItemPowerCycleDiv>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <MenuItemDiv>
          <TrashIcon stroke='1.5' width={18} height={18} />
          <label style={{marginTop: '4px'}}>Reimage Server</label>
        </MenuItemDiv>
      </MenuItem>
    </Menu>
  );
}
