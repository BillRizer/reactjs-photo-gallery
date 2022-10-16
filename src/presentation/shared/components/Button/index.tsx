import React from "react";
import { ButtonStyled } from "./style";
import { IconComponent } from "../Icon";

interface ButtonProps {
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  theme?: "only-text"|"default"|"primary";
  icon?: any;
  label: string;
  disabled?: boolean;
  onClick?: any;
}

export const Button = ({
  size = "medium",
  theme,
  icon,
  backgroundColor,
  label,
  disabled,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled
      type="button"
      className={`${theme || ""} ${size || ""}`}
      disabled={disabled}
      style={{ backgroundColor }}
      onClick={onClick}
      {...props}
    >
      <>
      {icon&&(<IconComponent disabled={disabled} size={size} data-testid="icon" Icon={icon}></IconComponent>)}
        {label}
      </>
    </ButtonStyled>
  );
};
