import { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { checkAuthStateChanged } from './firebase/firebase.utils';

import { ErrorBoundary } from './components/error-boundary/error-boundary.component';
import { Header } from './components/header/header.component';

import { IUser, UserModel } from './models/users.model';
import { UserService } from './services/user.service';

import { setCurrentUser } from './redux/user/user.actions';

import './App.css';

interface IState {
  currentUser: any;
}

interface IProps {
  setCurrentUser: any;
}

export class App extends Component<IProps, IState> {
  public unsubscribeFromAuth: any;

  constructor(props: IProps) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  public componentDidMount() {
    this.unsubscribeFromAuth = checkAuthStateChanged(async (userAuth: any) => {
      if (!userAuth) return this.props.setCurrentUser(null);
      const { email, displayName, uid } = userAuth;
      const userData = await UserService.signIn(new UserModel({
        email, displayName, authUid: uid,
      }));

      if (userData) {
        this.props.setCurrentUser({
          email: userData.email,
          displayName: userData.displayName,
          authUid: userData.authUid,
        });
      }
    });
  }

  public componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  public render() {
    const HomePageAsync = lazy(() => import('./pages/homepage/homepage.component'));
    const ShopPageAsync = lazy(() => import('./pages/shop/shop.component'));
    const SignInAndSignUpPageAsync = lazy(
      () => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
    );
    return (
      <div>
        <ErrorBoundary>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense fallback={'Page loading...'}><HomePageAsync /></Suspense>
                }
              />
              <Route
                path="/shop"
                element={
                  <Suspense fallback={'Page loading...'}><ShopPageAsync /></Suspense>
                }
              />
              <Route
                path="/signin"
                element={
                  <Suspense fallback={'Page loading...'}>
                    <SignInAndSignUpPageAsync currentUser={this.state.currentUser} />
                  </Suspense>
                }
              />
            </Routes>
          </BrowserRouter>
        </ErrorBoundary>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: IUser) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
