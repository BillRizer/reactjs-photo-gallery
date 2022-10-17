import styled from "styled-components";

export const Container = styled.div`
padding: 10px;
color:${(props)=> props.theme.colors.title_inv};
`;

export const MaskStyled = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    & img{
        width: 20px;
    height: 20px;
    display: flex;
    }
`;

