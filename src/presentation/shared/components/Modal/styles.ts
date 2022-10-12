import styled from 'styled-components';

export const Modal = styled.div`
background: ${(props) => props.theme.components.modal.bg};
color: ${(props) => props.theme.components.modal.primary};
width: 300px;
height: 300px;
z-index: 2;
`
export const Title = styled.div`
`
export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
&::after{
    content: '';
    background:${(props) => props.theme.components.loading.bg};
    opacity: 0.9;
    width: 100%;
    height: 100%;
    position: absolute;
}
    
`;
