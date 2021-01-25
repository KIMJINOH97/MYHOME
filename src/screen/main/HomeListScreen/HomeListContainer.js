import React from 'react';
import HomeListPresenter from './HomeListPresenter';

const HomeListContainer = ({ navigation }) => {
  const goPage = (page, item) => navigation.navigate(page, item);
  return <HomeListPresenter goPage={goPage} />;
};

export default HomeListContainer;
