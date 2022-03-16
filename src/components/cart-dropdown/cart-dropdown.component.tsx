import * as React from 'react';

import { CustomButton } from '../custom-button/custom-button.component';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { hiddenCart } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

export function CartDropdown() {
  const isActive = useAppSelector(state => state.cart.isActive);
  const dispatch = useAppDispatch();
  const handlePressEscButton = (event: any) => {
    if (!isActive) return;
    if (event.key === 'Escape') dispatch(hiddenCart());
  };

  window.addEventListener('keydown', handlePressEscButton);

  if (!isActive) return null;
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
}

export default CartDropdown;
