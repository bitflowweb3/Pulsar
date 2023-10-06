import styled from 'styled-components';

const TrafficPerServerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-base);
  /* position: fixed; */
`;

const TrafficMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);
  border-radius: var(--space-l);
  padding: var(--space-s) var(--space-base);
  gap: var(--space-s);
  header {
    display: flex;
    flex-direction: row;
    label {
      font-size: 12px;
      color: var(--color-gray-100);
    }
    aside {
      font-size: 13px;
      color: white;
    }
  }
`;

const MainContentDiv = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-s);
  aside {
    color: var(--color-gray-100);
    font-size: 12px;
  }
  .traffic-bar {
    display: flex;
    p {
      display: inline;
      color: white;
      font-size: 11px;
      border-radius: 10px;
      padding: var(--space-none) var(--space-s);
      &:first-child {
        flex: 20%;
        background-color: var(--color-pink-600);
      }
      &:nth-child(2) {
        flex: 30%;
        background-color: #f17f7f;
      }
      &:last-child {
        flex: 40%;
        background-color: #72c2fc;
      }
    }
  }
`;

const RoundedComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: #2c2f39;
  padding: var(--space-xs);
  text-align: center;
  aside {
    font-size: 11px;
    font-stretch: ultra-condensed;
    color: var(--color-gray-100);
  }
  label {
    font-size: 14px;
    color: white;
  }
`;

const FooterDiv = styled.footer`
  background-color: #313442;
  padding: var(--space-s);
  border-radius: var(--space-s);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
`;

const ServerListItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--space-s);
    label {
        color: white;
        font-size: 12px;
    }
  }
  label{
    color: #9291A5;
    font-size: 12px;
  }
`;
const CircleIcon = styled.div`
  background-color: red;
  border-radius: 8px;
  width: 8px;
  height: 8px;
`;

const AddServerButton = styled.button`
  flex: 1;
  border-radius: var(--space-l);
  padding: var(--space-xs) var(--space-s);
  font-size: 20px;
`;

export {
  TrafficPerServerCard,
  TrafficMainContainer,
  AddServerButton,
  MainContentDiv,
  RoundedComponent,
  FooterDiv,
  CircleIcon,
  ServerListItemDiv,
};
