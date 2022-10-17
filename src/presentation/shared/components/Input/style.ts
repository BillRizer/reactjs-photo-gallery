import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-flow: column;
  label{
    margin-bottom: 10px;
  }
`;
export const InputStyled = styled.input`
  background: ${(props) => props.theme.form.fields_bg};
  border: 3px solid ${(props) => props.theme.form.fields_bg};
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: ${(props) => props.theme.form.fields_text};
  padding: 10px 20px;
  transition: 1s;
  &:focus {
    outline: none;
    border: 3px solid ${(props) => props.theme.form.fields_bg_focus};
    background: ${(props) => props.theme.form.fields_bg_focus};
    color: ${(props) => props.theme.form.fields_text_focus};
  }
`;
