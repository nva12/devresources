import React from 'react';
import AuthForm from '../components/AuthForm';

const SignInScreen = () => {
  return (
    <>
      <h1>Sign In</h1>
      <AuthForm variant='signin' />
    </>
  );
};

export default SignInScreen;
