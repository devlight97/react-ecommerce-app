import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { ErrorBoundary } from './components/error-boundary/error-boundary.component';
import { Header } from './components/header/header.component';
import { HomePage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import './App.css';

interface IState {
  currentUser: any;
}

export class App extends React.Component<{}, IState> {
  public unsubscribeFromAuth: any;

  constructor(props: {}) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  public componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth: any) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        if (!userRef) return;
        userRef.onSnapshot((snapShot: any) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          // console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
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
              <Route path="/signin" element={<SignInAndSignUpPage />} />
            </Routes>
          </BrowserRouter>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
