import * as React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { toggleCart } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

export function CartIcon() {
  const isActive = useAppSelector(state => state.cart.isActive);
  const dispatch = useAppDispatch();
  return (
    <div className="cart-icon"
      onClick={() => dispatch(toggleCart(!isActive))}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

export default CartIcon;
