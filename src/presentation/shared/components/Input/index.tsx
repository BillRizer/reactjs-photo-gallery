import React from 'react';
import {InputStyled} from './style';
interface Props {
  type?:string,
  value?:any,
  placeholder?:string,
  onChange?:React.ChangeEventHandler<HTMLInputElement>
}

export const Input = ({placeholder,type,value,onChange,...props}:Props) => {
  return (
    <InputStyled placeholder={placeholder} type={type} value={value} onChange={onChange} {...props} />
  );
};
