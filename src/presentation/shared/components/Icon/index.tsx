import React from "react";
import { IconStyled } from "./style";

interface Props {
  Icon: any;
  size: "small" | "medium" | "large";
  onClick?: any;
  cursorPointer?: boolean;
  disabled?: boolean;
}

export const IconComponent = ({
  Icon,
  size,
  onClick,
  cursorPointer,
  disabled,
  ...props
}: Props) => {
  return (
    <IconStyled data-testid='icon' cursorPointer onClick={onClick} className={`${disabled&&('disabled')} ${size}`}>
      {typeof Icon === "string" ?(
        <img src={Icon} alt="" />
      ):(
        <Icon/>
      )}
      
    </IconStyled>
  );
};
