import React from 'react';
import SignUpPresenter from './SignUpPresenter';

const SignUpContainer = ({ navigation }) => {
  const goBack = () => navigation.pop();
  return <SignUpPresenter goBack={goBack} />;
};

export default SignUpContainer;
