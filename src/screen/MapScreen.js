import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import styled from 'styled-components/native';
import TabTitle from '../util/TabTitle';

import Map from '../components/Map/Map';

const MapScreen = ({ navigation }) => {
  return (
    <Wrapper>
      <TabTitle name="지도" />
      <MapContainer>
        <Map />
      </MapContainer>
    </Wrapper>
  );
};

export default MapScreen;

const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  flex: 1;
  background-color: white;
`;

const MapContainer = styled.View`
  flex: 11;
`;
