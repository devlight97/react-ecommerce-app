import * as React from 'react';
import { Link } from 'react-router-dom';

import { CartIcon } from '../cart-icon/cart-icon.component';

import { auth } from '../../firebase/firebase.utils';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setCurrentUser } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { CartDropdown } from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

export function Header() {
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(state => state.user.currentUser);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <Link to="/">
            <div className="option" onClick={async () => {
              await auth.signOut();
              dispatch(setCurrentUser(null));
            }}>
              SIGN OUT
            </div>
          </Link>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon/>
      </div>
      <CartDropdown />
    </div>
  );
}

export default Header;
