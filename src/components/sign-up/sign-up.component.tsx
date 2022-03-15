import * as React from 'react';

import { UserService } from '../../services/user.service';

import { CustomButton } from '../custom-button/custom-button.component';
import { FormInput } from '../form-input/form-input.component';

import './sign-up.styles.scss';

interface IState {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
  [name: string]: string;
}

export class SignUp extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  public handleSubmit = async (event: any) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    // console.log('displayname', displayName);
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      await UserService.signUp({
        displayName,
        email,
        password,
      });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      // console.error(error);
    }
  }

  public handleChange = (event: any) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  public render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
