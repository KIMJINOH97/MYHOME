import React from 'react';
import EnrollDetailsPresenter from './EnrollDetailsPresenter';

const EnrollDetailsContainer = ({ navigation }) => {
  const goBack = () => navigation.pop();
  return <EnrollDetailsPresenter goBack={goBack} />;
};

export default EnrollDetailsContainer;
