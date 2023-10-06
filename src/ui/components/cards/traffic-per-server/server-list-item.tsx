import React from 'react';
import { CircleIcon, ServerListItemDiv } from './styled';

interface ServerListItemProps {
  servername: string;
  size: string;
}

const ServerListItem = ({ servername, size }: ServerListItemProps) => {
  return (
    <ServerListItemDiv>
      <span>
        <CircleIcon />
        <label>{servername}</label>
      </span>
      <label>{size}</label>
    </ServerListItemDiv>
  );
};
export default ServerListItem;
