import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import styled from 'styled-components/native';
import TabTitle from '../util/TabTitle';

import Map from '../components/Map/Map';

const locations = [
  { lat: 37.5489504, long: 126.9246969 },
  { lat: 37.5489504, long: 126.9246969 },
  { lat: 37.5489404, long: 126.9346969 },
  { lat: 37.5488304, long: 126.9446969 },
  { lat: 37.5486204, long: 126.9256969 },
  { lat: 37.5487104, long: 126.9266969 },
  // { lat: 37.5489504, long: 150.863657 },
  // { lat: 37.5489504, long: 148.662905 },
  // { lat: 37.5489504, long: 175.699196 },
  // { lat: 37.5489504, long: 175.790222 },
  // { lat: 37.5489504, long: 145.116667 },
  // { lat: 37.5489504, long: 145.128708 },
  // { lat: 37.5489504, long: 145.133858 },
  // { lat: 37.5489504, long: 145.143299 },
  // { lat: 37.5489504, long: 145.145187 },
  // { lat: 37.5489504, long: 145.137978 },
  // { lat: 37.5489504, long: 144.968119 },
  // { lat: 37.5489504, long: 144.695692 },
  // { lat: 37.5489504, long: 175.053218 },
  // { lat: 37.5489504, long: 174.865694 },
  // { lat: 37.5489504, long: 147.439506 },
  // { lat: 37.5489504, long: 147.501315 },
  // { lat: 37.5489504, long: 147.438 },
  // { lat: 37.5489504, long: 170.463352 },
];
const MapScreen = ({ navigation }) => {
  return (
    <Wrapper>
      <TabTitle name="지도" />
      <MapContainer>
        <Map locations={locations} />
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
