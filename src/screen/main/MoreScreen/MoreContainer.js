import React from 'react';
import MorePresenter from './MorePresenter';

const MoreContainer = ({ navigation }) => {
  const goPage = (page) => navigation.navigate(page);
  return <MorePresenter goPage={goPage} />;
};

export default MoreContainer;
