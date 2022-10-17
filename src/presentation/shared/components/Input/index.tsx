import React from "react";
import { Container, InputStyled } from "./style";
interface Props {
  label?: string;
  id:string;
  type?: string;
  value?: any;
  defaultValue?:any;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({
  label,
  id,
  placeholder,
  type,
  value,
  defaultValue,
  onChange,
  ...props
}: Props) => {
  return (
    <Container>
      {label&&(
        <label htmlFor={id}>{label}</label>
      )}
      <InputStyled
        id={id}
        name={id}
        data-testid="input"
        placeholder={placeholder}
        type={type}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        {...props}
      />
    </Container>
  );
};
