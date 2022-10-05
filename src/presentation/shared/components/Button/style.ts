import styled from "styled-components";

export const ButtonStyled = styled.button`
  font-size: ${(props) => props.theme.fonts.md};
  height: 49px;
  padding: 0;
  margin: 0;
  padding-right: 25px;
  padding-left: 25px;
  border-radius: 8px;
  display: initial;
  cursor: pointer;
  transition: 0.5s;
  border:1px solid transparent;

  &.primary{
    background-color: ${(props) => props.theme.button.primary};
    color: ${(props) => props.theme.button.primary_text};
  }
  &.primary:hover{
    background-color: ${(props) => props.theme.button.primary_light};
    color: ${(props) => props.theme.button.primary_text};
  }
  &:disabled {
    cursor: not-allowed;
  }

`;
