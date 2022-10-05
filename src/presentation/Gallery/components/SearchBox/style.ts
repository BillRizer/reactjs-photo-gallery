import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: ${(props) => props.theme.colors.shape}; */
    flex-direction: column;
`
export const Brand = styled.div`
    display: flex;
    width: 150px;
    /* background: ${(props) => props.theme.colors.shape}; */
    & img{
        width: 100%;
    }
`