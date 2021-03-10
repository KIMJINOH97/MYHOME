import React from 'react';
import HomeInformationPresenter from './HomeInformationPresenter';

const HomeInformationContainer = ({ route, navigation }) => {
  const goPage = (page, item) => navigation.navigate(page, item);
  const homeId = route.params.id;
  return <HomeInformationPresenter route={route} homeId={homeId} goPage={goPage} />;
};

export default HomeInformationContainer;
