import React from 'react';
import {ButtonStyled} from './style';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    //['storybook-button', `storybook-button--${size}`, mode].join(' ')
    <ButtonStyled
      type="button"
      className={''}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </ButtonStyled>
  );
};
