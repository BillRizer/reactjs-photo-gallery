import styled from "styled-components";
interface Props{
    cursorPointer:boolean;
}
export const IconStyled = styled.div<Props>`

    &.small{
        width: 18px;
        height: 18px;
    }
    &.medium{
        width: 28px;
        height: 28px;
    }
    &.large{
        width: 36px;
        height: 36px;
    }
    ${(props) => props.cursorPointer ? `cursor:pointer;`:''}

`
