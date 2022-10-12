import styled from "styled-components";

export const ButtonStyled = styled.button`
  /* font-size: ${(props) => props.theme.fonts.md};
  height: 49px;
  padding: 0;
  margin: 0;
  padding-right: 25px;
  padding-left: 25px;
  border-radius: 8px;
  display: initial;
  cursor: pointer;
  transition: 0.5s;
  border:1px solid transparent; */
  border:1px solid #000;
  border-radius: 4px;
  display: flex;
  cursor: pointer;
  align-items: center;

  & .icon{
    margin-right:10px;
  }
  &.large{
    padding: 11px 20px;
    font-size: ${(props) => props.theme.fonts.lg}
  }
  &.medium{
    padding: 7px 14px;
    font-size: ${(props) => props.theme.fonts.md}
  }
  &.small{
    padding: 5px 10px;
  }
  &.primary{
    background-color: ${(props) => props.theme.button.primary};
    border-color: ${(props) => props.theme.button.primary};
    color: ${(props) => props.theme.button.primary_text};
  }
  &.primary:hover{
    background-color: ${(props) => props.theme.button.primary_light};
    border-color: ${(props) => props.theme.button.primary_light};
    color: ${(props) => props.theme.button.primary_text};
  }
  &.default{
    background-color: ${(props) => props.theme.button.default};
    color: ${(props) => props.theme.button.default_text};
    border-color: ${(props) => props.theme.button.default};
  }
  &.default:hover{
    background-color: ${(props) => props.theme.button.default_light};
    border-color: ${(props) => props.theme.button.default_light};
    color: ${(props) => props.theme.button.default_text};
  }
  &:disabled,&:disabled .icon {
    cursor: not-allowed;
    opacity: 0.8;
    
  }

  &.only-text{
    background: transparent;
    border-color: transparent;
  }
`;
