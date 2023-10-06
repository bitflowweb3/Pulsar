import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Hr } from '../Hr';

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
      <MenuItem
        onClick={handleClose}
      >
        Change Billing
      </MenuItem>
      <MenuItem onClick={handleClose}>Manage Server</MenuItem>
      <MenuItem onClick={handleClose}>IpAddresses</MenuItem>
      <MenuItem onClick={handleClose}>View Statements</MenuItem>
      <Hr style={{marginLeft: '12px', marginRight: '12px'}}/>
      <MenuItem onClick={handleClose}>Power Cycle</MenuItem>
    </Menu>
  );
}
