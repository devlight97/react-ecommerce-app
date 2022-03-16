import * as React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import { toggleCart } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

export function CartIcon() {
  const cartItems = useAppSelector(state => state.cart.cartItems);
  const dispatch = useAppDispatch();

  return (
    <div className="cart-icon"
      onClick={() => dispatch(toggleCart())}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItems.length}</span>
    </div>
  );
}

export default CartIcon;
