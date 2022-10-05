import React from 'react';
import {ButtonStyled} from './style';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  disabled: boolean;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    //['storybook-button', `storybook-button--${size}`, mode].join(' ')
    <ButtonStyled
      type="button"
      className={'primary'}
      disabled={disabled}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </ButtonStyled>
  );
};
