import React from 'react';
import LoginPresenter from './LoginPresenter';

const LoginContainer = ({ navigation }) => {
  const goBack = () => navigation.pop();
  const goPage = (page) => navigation.navigate(page);
  return <LoginPresenter goBack={goBack} goPage={goPage} />;
};

export default LoginContainer;
