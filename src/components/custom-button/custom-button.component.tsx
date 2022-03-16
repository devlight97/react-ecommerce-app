import * as React from 'react';

import './custom-buttom.styles.scss';

interface IProps {
  children: string;
  isGoogleSignIn?: boolean;
  type?: 'button' | 'submit' | 'reset';
  isClickable?: boolean;
  onClick?: (event: any) => void;
}

export function CustomButton(props: IProps) {
  const { children, isGoogleSignIn, isClickable = true, ...buttonProps } = props;
  return (
    <button
      disabled={!isClickable}
      className={`
        ${isGoogleSignIn ? 'google-sign-in' : ''}
        ${isClickable ? '' : 'blur-button'}
        custom-button
      `}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
