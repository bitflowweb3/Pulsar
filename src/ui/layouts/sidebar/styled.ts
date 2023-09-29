import styled from 'styled-components'

export const SidebarDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 256px;
    padding: var(--padding-l);
    background-color: var(--color-primary);
    justify-content: space-between;
`
export const TabsGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--padding-xs);
`
export const TabButton = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    gap: var(--padding-s);
    border-radius: 48px;
    padding: var(--padding-s) var(--padding-base);
`
export const TabButtonNone = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    gap: var(--padding-s);
    padding: var(--padding-s) var(--padding-base);

    & > span {
        color: var(--color-gray-400);
    }
    & > .button {
        filter: brightness(50%)
    }
`
export const ProContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-l);
`
export const ProAccountDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: var(--space-base);
    padding-top: calc(50% - var(--space-s));
    background: linear-gradient(to bottom left, #5c8fff, #c14FFF);
    border-radius: var(--space-base);
    aspect-ratio: 1/1;
`
export const UpgradeContentDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-neutral-primary);
    padding: var(--space-xl);
    gap: var(--space-s);
`
export const UpgradeButton = styled.button`
    padding: 0 var(--space-base);
    border-radius: var(--space-l);
    width: 100%;
    height: 32px;
    font-size: 12px;
`
export const ToggleDiv = styled.div`
    background-color: var(--color-neutral-primary);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
    padding: var(--padding-none) var(--padding-base);
    border-radius: 12px;
    align-items: center;
`
export const ToggleContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: var(--padding-xs);
    align-items: center;
`
export const Hr = styled.div`
    width: 2px;
    height: var(--space-l);
    background-color: var(--color-primary);
`