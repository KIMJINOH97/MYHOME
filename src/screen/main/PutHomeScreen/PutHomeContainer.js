import React from 'react';
import PutHomePresenter from './PutHomePresenter';

const PutHomeContainer = ({ navigation }) => {
  const goPage = (page) => navigation.navigate(page);
  const replacePage = (page) => navigation.replace(page);
  return <PutHomePresenter goPage={goPage} replacePage={replacePage} />;
};

export default PutHomeContainer;
