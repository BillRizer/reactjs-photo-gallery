import React from "react";
import { IconType } from "react-icons";
import { ButtonStyled } from "./style";

interface ButtonProps {
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  theme?: "only-text"|"default"|"primary";
  Icon?: any;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  size = "medium",
  theme,
  Icon,
  backgroundColor,
  label,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    //['storybook-button', `storybook-button--${size}`, mode].join(' ')
    <ButtonStyled
      type="button"
      className={`${theme || ""} ${size || ""}`}
      disabled={disabled}
      style={{ backgroundColor }}
      {...props}
    >
      <>
      {Icon&&(<div className="icon">{Icon}</div>)}
        
        {label}
      </>
    </ButtonStyled>
  );
};
