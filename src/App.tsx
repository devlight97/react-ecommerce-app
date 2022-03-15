import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { checkAuthStateChanged } from './firebase/firebase.utils';

import { ErrorBoundary } from './components/error-boundary/error-boundary.component';
import { Header } from './components/header/header.component';
import { HomePage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { UserModel } from './models/users.model';
import { UserService } from './services/user.service';

import { count } from './redux/user/user.actions';

import './App.css';

interface IState {
  currentUser: any;
}

interface IProps {
  counter: number;
  setCount: any;
}

export class App extends React.Component<IProps, IState> {
  public unsubscribeFromAuth: any;

  constructor(props: IProps) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  public componentDidMount() {
    this.unsubscribeFromAuth = checkAuthStateChanged(async (userAuth: any) => {
      if (!userAuth) return this.setState({ currentUser: userAuth });
      const { email, displayName, uid } = userAuth;
      const userData = await UserService.signIn(new UserModel({
        email, displayName, authUid: uid,
      }));
      this.setState({
        currentUser: { ...userData },
      });
    });
  }

  public componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  public render() {
    return (
      <div>
        <ErrorBoundary>
          <BrowserRouter>
            <Header currentUser={this.state.currentUser} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route
                path="/signin"
                element={<SignInAndSignUpPage currentUser={this.state.currentUser} />}
              />
            </Routes>
          </BrowserRouter>
        </ErrorBoundary>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  counter: state.user.counter,
});

const mapDispatchToProps = (dispatch: any) => ({
  setCount: (num: number) => dispatch(count(num)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
