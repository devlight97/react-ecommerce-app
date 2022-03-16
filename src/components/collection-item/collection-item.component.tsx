import * as React from 'react';

import { CustomButton } from '../custom-button/custom-button.component';

import { addItem } from '../../redux/cart/cart.actions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import './collection-item.styles.scss';

interface IProps {
  key: number;
  item: any;
}

export function CollectionItem({ item }: IProps) {
  const cartItems = useAppSelector(state => state.cart.cartItems);
  const dispatch = useAppDispatch();
  const handleAddItem = () => {
    return dispatch(addItem(item));
  };

  const renderButton = () => {
    if (cartItems.includes(item)) {
      return <CustomButton isClickable onClick={handleAddItem}>View in cart</CustomButton>;
    }
    return <CustomButton onClick={handleAddItem}>Add to cart</CustomButton>;
  };

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
      {renderButton()}
    </div>
  );
}

export default CollectionItem;
