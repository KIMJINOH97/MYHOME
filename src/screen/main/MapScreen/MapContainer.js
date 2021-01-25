import React, { useState, useEffect } from 'react';
import MapPresenter from './MapPresenter';
import { useRecoilState } from 'recoil';

import { homeListState } from '../../../states/HomeListState';

const MapContainer = ({ navigation }) => {
  const goPage = (page) => navigation.navigate(page);

  return <MapPresenter goPage={goPage} />;
};

export default MapContainer;
