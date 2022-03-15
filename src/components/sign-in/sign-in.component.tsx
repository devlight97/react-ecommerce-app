import { signInWithEmailAndPassword } from 'firebase/auth';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { CustomButton } from '../custom-button/custom-button.component';
import { FormInput } from '../form-input/form-input.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

interface IState {
  email: string;
  password: string;
  [name: string]: string;
}

interface IProps {
  navigate: any;
}

class InnerSignIn extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  public handleSubmit = async (event: any) => {
    event.preventDefault();
    const { email, password } = this.state;
    await signInWithEmailAndPassword(auth, email, password);
    this.props.navigate('/');
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
            {/* <Link to="/"> */}
            <CustomButton type="submit">
              Sign in
            </CustomButton>
            {/* </Link> */}
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export function SignIn(props: any) {
  const navigate = useNavigate();
  return <InnerSignIn navigate={navigate} {...props} />;
}

export default SignIn;
