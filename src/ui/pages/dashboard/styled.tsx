import { Space } from '../../../constants/size';
import styled from 'styled-components';

const PageHeader = styled.div`
  padding: ${Space.none} ${Space.sb};
  padding-bottom: ${Space.s};
  h6 {
    color: var(--color-gray-100);
  }
`;

const DashboardMainContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--space-xl);
  
  height: calc(100vh - 200px);
  padding-left: ${Space.sb};

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--color-gray-400);
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-neutral-400);
  }

  .sub-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-l);

    &:first-child {
      flex-basis: calc(100vw - 615px);
      flex-shrink: 1;
      flex-grow: 0;
    }
    &:last-child {
      flex-basis: 360px;
      flex-grow: none;
    }
  }
  .dashboard-right-sidebar {
    overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--color-gray-400);
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-neutral-400);
  }

    position: sticky;
    top: 0px;
    right: var(--space-base);
  }
`;

export { PageHeader, DashboardMainContent };
