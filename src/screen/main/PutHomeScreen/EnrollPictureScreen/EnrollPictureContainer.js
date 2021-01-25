import React from 'react';
import EnrollPicturePresenter from './EnrollPicturePresenter';

const EnrollPictureContainer = ({ navigation }) => {
  const goBack = () => navigation.pop();
  return <EnrollPicturePresenter goBack={goBack} />;
};

export default EnrollPictureContainer;
