import * as React from 'react';

import { CustomButton } from '../custom-button/custom-button.component';
import { FormInput } from '../form-input/form-input.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

interface IState {
  email: string;
  password: string;
  [name: string]: string;
}

export class SignIn extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  public handleSubmit = (event: any) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  }

  public handleChange = (event: any) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  public render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
