import styled from "styled-components";

export const Modal = styled.div`
  background: ${(props) => props.theme.components.modal.bg};
  color: ${(props) => props.theme.components.modal.primary};
  z-index: 99;
  padding: 60px 60px 25px 60px;
  border-radius: 4px;
  position: relative;
  max-width: 400px;
`;
export const Close = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 10px;
  padding-bottom: 17px;
  & .force-big-icon div{
    width: 60px;
    height: 60px;
    font-size: 60px;
  }
  & >div:first-child{
    margin-right: 20px;
  }
  p{
    line-height:2rem;
  }
`;
export const Disclaimer = styled.div`
  text-align: center;
  margin-top: 20px;
    font-size: 13px;
`;
export const Actions = styled.div``;
export const Content = styled.div``;
export const Footer = styled.div``;

export const Screen = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.components.modal.scree_bg};
  opacity: 0.9;
`;
