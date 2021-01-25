import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

import TabTitle from '../../../util/TabTitle';
import Map from '../../../components/Map/Map';

const MapPresenter = ({ goPage, lat, long }) => {
  return (
    <Wrapper>
      <TabTitle name="지도" />
      <MapView>
        <Map goPage={goPage} lat={lat} long={long} />
      </MapView>
    </Wrapper>
  );
};

export default MapPresenter;

const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  flex: 1;
  background-color: white;
`;

const MapView = styled.View`
  flex: 11;
`;
