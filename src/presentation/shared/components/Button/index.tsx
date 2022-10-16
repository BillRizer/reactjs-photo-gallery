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
  onClick?: () => void;
}

export const Button = ({
  size = "medium",
  theme,
  icon,
  backgroundColor,
  label,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyled
      type="button"
      className={`${theme || ""} ${size || ""}`}
      disabled={disabled}
      style={{ backgroundColor }}
      {...props}
    >
      <>
      {icon&&(<IconComponent size={size} data-testid="icon" Icon={icon}></IconComponent>)}
        {label}
      </>
    </ButtonStyled>
  );
};
