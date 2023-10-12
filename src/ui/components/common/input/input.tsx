import { Color } from '../../../../constants/color'
import { Space } from '../../../../constants/size'
import styled from 'styled-components'

const InputDiv = styled.div`
    background-color: ${Color.$neutral_overlay};
    width: 600px;
    border-radius: 24px;
    padding: ${Space.s} ${Space.base};
    align-items: center;
    display: flex;
    flex-direction: row;
    flex: 1;
    width: 100%;
`
const InputTextDiv = styled.input`
    background-color: ${Color.$neutral_overlay};
    color: white;
    flex: 1 1 200px;
    &:hover {
        background-color: ${Color.$neutral_overlay};
    }
    &:focus-visible {
        outline: none;
    }
`
interface InputComponentProps {
    inputPlaceholder : string
}
const InputComponent = ({inputPlaceholder} : InputComponentProps) => {
    return (
        <InputDiv>
            <InputTextDiv placeholder={inputPlaceholder} />
        </InputDiv>
    )
}
export default InputComponent;
