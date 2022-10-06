import React from 'react';
import {IconStyled} from './style';

interface Props {
  icon:any,
  size:"small"|"medium"|"large",
  onClick:any,
  cursorPointer?:boolean,
}

export const Icon = ({
  icon,
  size,
  onClick,
  cursorPointer,
  ...props
}: Props) => {
  return (
    <IconStyled cursorPointer onClick={onClick} className={size}><img src={icon}  alt="" /></IconStyled>
  );
};
