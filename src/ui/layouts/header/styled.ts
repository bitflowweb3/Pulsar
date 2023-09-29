import styled from 'styled-components'

export const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    padding: var(--padding-none) var(--padding-base);
    justify-content: space-between;
    background-color: var(--color-primary);
    align-items: center;
`

export const LogoContent = styled.div`
    padding: var(--padding-none) var(--padding-base);
`
export const AuthContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
    align-items: center;
`