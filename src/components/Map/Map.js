import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { View, ActivityIndicator } from 'react-native';
import MapView from 'react-native-map-clustering';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet } from 'react-native';

import { TextStyle } from '../../util/TextStyle';
import { NK500 } from '../../util/Color';

import { useRecoilState } from 'recoil';
import { homeListState } from '../../states/HomeListState';
import MAP_PIN from '../../../assets/MAP_PIN.png';

const Map = ({ goPage }) => {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [homeList, setHomeList] = useRecoilState(homeListState);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLong(position.coords.longitude);
        setLat(position.coords.latitude);
      },
      (error) => {
        console.error(error);
      },
      {
        timeout: 15000,
      }
    );
  }, []);

  const markers = homeList.map((list, index) => {
    return (
      <Marker
        style={styles.marker}
        coordinate={{
          latitude: list.latitude,
          longitude: list.longitude,
          latitudeDelta: 1.5,
          longitudeDelta: 1.5,
        }}
        image={MAP_PIN}
        key={index}
      ></Marker>
    );
  });

  return (
    <View style={{ flex: 1 }}>
      {lat === undefined && homeList ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size="large" color="#ff766a" />
        </View>
      ) : (
        <>
          <MapView
            initialRegion={{
              latitude: lat,
              longitude: long,
              latitudeDelta: 0.0052,
              longitudeDelta: 0.0042,
            }}
            onRegionChange={(region) => {
              setLat(region.latitude);
              setLong(region.longitude);
            }}
            onRegionChangeComplete={(region) => {
              setLat(region.latitude);
              setLong(region.longitude);
            }}
            radius={55}
            clusterColor="#ff766a"
            provider={PROVIDER_GOOGLE}
            loadingEnabled={true}
            showsUserLocation={true}
            maxZoomLevel={18}
            style={styles.map}
          >
            {markers}
          </MapView>
          <ShowButtonBox>
            <ShowButton onPress={() => goPage('HomeList')}>
              <ButtonContent>이 지역 매물보기</ButtonContent>
            </ShowButton>
          </ShowButtonBox>
        </>
      )}
    </View>
  );
};

export default Map;

const ShowButtonBox = styled.View`
  width: 90%;
  height: 44px;
  position: absolute;
  top: 90%;
  left: 5%;
  right: 5%;
`;
const ShowButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  background-color: #ff766a;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const ButtonContent = styled(TextStyle)`
  font-family: ${NK500};
  color: white;
  font-size: 18px;
`;

const styles = StyleSheet.create({
  map: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  marker: {
    width: 20,
    height: 20,
  },
});
