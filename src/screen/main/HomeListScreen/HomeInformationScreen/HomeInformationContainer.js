import React from 'react';
import HomeInformationPresenter from './HomeInformationPresenter';

const HomeInformationContainer = ({ route }) => {
  const homeId = route.params.id;
  return <HomeInformationPresenter route={route} homeId={homeId} />;
};

export default HomeInformationContainer;
