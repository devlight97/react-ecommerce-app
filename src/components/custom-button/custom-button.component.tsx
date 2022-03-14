import * as React from 'react';

import './custom-buttom.styles.scss';

interface IProps {
  children: string;
  isGoogleSignIn?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: any) => void;
}

export function CustomButton(props: IProps) {
  const { children, isGoogleSignIn, ...buttonProps } = props;
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
