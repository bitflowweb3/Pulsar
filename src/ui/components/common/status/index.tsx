import React from 'react';
import styled from 'styled-components';
import { BorderRadius, Space } from '../../../../constants/size';
import { Color } from '../../../../constants/color';
import { StatusType } from '../../../../types/status.module';

interface StatusProps {
  status: StatusType | undefined;
}
interface StatusDivProps {
  type?: boolean;
}
export const StatusDiv = styled.div<StatusDivProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: ${BorderRadius.l};
  gap: ${Space.s};
  background-color: ${Color.$dark_card_bright};
  padding: ${(props) =>
    props.type === false ? ('0px 6px') : ('4px 12px')};
`;
export const StatusLabel = styled.label<StatusProps>`
  font-size: 14px;
  color: ${(props) => {
    switch (props.status) {
      case StatusType.on | StatusType.success | StatusType.assigned:
        return Color.$success_300;
      case StatusType.error | StatusType.off:
        return Color.$error_400;
      case StatusType.unassigned:
        return Color.$netural_700;
      case StatusType.loading | StatusType.provisioning:
        return Color.$white;
      default:
        return Color.$success_300;
    }
  }};
`;
export const StatusCircleIcon = styled.div<StatusProps>`
  width: 10px;
  height: 10px;
  border-radius: 20px;
  background-color: ${(props) => {
    switch (props.status) {
      case StatusType.on | StatusType.success | StatusType.assigned:
        return Color.$success_300;
      case StatusType.error | StatusType.off:
        return Color.$error_400;
      case StatusType.unassigned:
        return Color.$netural_700;
      case StatusType.loading | StatusType.provisioning:
        return Color.$white;
      default:
        return Color.$success_300;
    }
  }};
`;

const StatusContext = ({
  status,
  label,
  type,
}: {
  status: StatusType;
  label: string;
  type?: boolean;
}) => {
  return (
    <StatusDiv type={type}>
      <StatusCircleIcon status={status} />
      <StatusLabel status={status}>{label}</StatusLabel>
    </StatusDiv>
  );
};
export default StatusContext;
