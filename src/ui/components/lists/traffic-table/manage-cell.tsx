import React from 'react'
import { ManageCellButton, ManageDropDown } from './styled';
import Image from 'next/image';
import ArrowUp from '../../../../assets/icons/arrow-up.svg';
import ArrowDown from '../../../../assets/icons/arrow-down.svg';
import { useState } from 'react';
import DropdownMenu from './dropmenu';


interface ManageCellProps {
  status: boolean;
}
const ManageCell = ({ status }: ManageCellProps) => {
  const [dropDownStatus, ToggleDropDown] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    ToggleDropDown(true) 
  };
  return (
    <ManageDropDown>
      <ManageCellButton
        onClick={handleClick}
        onBlur={() => ToggleDropDown(anchorEl ? true : false)}
      >
        <label>Controls</label>
        <Image src={dropDownStatus ? ArrowUp : ArrowDown} alt='arrow-up-icon' />
      </ManageCellButton>
      <DropdownMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </ManageDropDown>
  );
};
export default ManageCell;
