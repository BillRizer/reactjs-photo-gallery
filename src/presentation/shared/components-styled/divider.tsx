import styled from 'styled-components';

interface props{
    size:'10px'|'20px'|'30px'|'40px';
}
export const DividerStyled = styled.div<props>`
    display: block;
    width: 100%;
    height:${props => props.size};
`;
