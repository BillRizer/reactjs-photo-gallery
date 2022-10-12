import styled from 'styled-components';

interface props{
    margin?:number;
}
export const GroupedStyled = styled.div<props>`
    display: flex;
    width: 100%;
    *{
        margin-right: ${props => props.margin}px;
    }
    *:last-child{
        margin-right: 0px;
    }
`;
