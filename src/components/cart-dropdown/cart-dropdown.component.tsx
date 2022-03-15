import * as React from 'react';

import { CustomButton } from '../custom-button/custom-button.component';

import { useAppSelector } from '../../redux/hooks';

import './cart-dropdown.styles.scss';

export function CartDropdown() {
  const isActive = useAppSelector(state => state.cart.isActive);
  if (!isActive) return null;
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
}

export default CartDropdown;
