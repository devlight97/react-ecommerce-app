import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../redux/hooks';

import { SignIn } from '../../components/sign-in/sign-in.component';
import { SignUp } from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

interface IProps {
  currentUser: any;
}

export function SignInAndSignUpPage(props: IProps) {
  const navigate = useNavigate();
  const currentUser = useAppSelector(state => state.user.currentUser);
  React.useEffect(() => {
    if (currentUser) navigate('/');
  });
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUpPage;
