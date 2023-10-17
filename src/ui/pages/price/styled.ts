import styled from 'styled-components';
import { Space } from '../../../constants/size';
import { Color } from '../../../constants/color';

export const PricePageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-bg-primary);
  height: calc(100vh - 60px);
  width: 100vw;
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
`;
export const SubContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  padding: ${Space.xxxl} ${Space.l};
  gap: ${Space.xxxl};
`;
export const SubHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.base};
  label {
    color: ${Color.$brand_600};
  }
  h1 {
    font-size: 48px;
    /* line-height: none !important; */
  }
  p {
    font-size: 20px;
  }
`;
export const SubBody = styled.div`
    display: flex;
    flex-direction: row;
    gap: ${Space.l};
`
export const ConfigureInfoBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${Space.l};
`

export const ServerConfigureContent = styled.div`
    flex: 1;
    background-image: linear-gradient(to bottom, #7F56D9,rgba(42, 108, 236, 0.88), rgba(0, 42, 255, 0.78));
    /* border: 1px solid ; */
    border-radius: 16px;
`
export const ServerConfigureBorderContent = styled.div`
    background-color: ${Color.$dark_card};
    margin: 1px;
    border-radius: 15px;
    padding: ${Space.l} ${Space.l};
    display: flex;
    flex-direction: column;
    gap: ${Space.xl};
`
export const ServerConfigureDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;;
  gap: ${Space.l};
`
export const ConfigureBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Space.xl};
`

export const ConfigureInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${Space.xl};
`

export const ConfigureName = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${Space.sb};
  align-items: center;
  label {
    font-size: 18px;
    color: white;
  }
`
export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`