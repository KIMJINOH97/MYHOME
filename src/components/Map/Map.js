import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components/native';
import { View, Text, ActivityIndicator } from 'react-native';
import MapView from 'react-native-map-clustering';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { TextStyle } from '../../util/TextStyle';
import { NK500, NK700 } from '../../util/Color';

import { useRecoilState } from 'recoil';
import { homeListState } from '../../states/HomeListState';
import { homeApi } from '../../api/index';
import MAP_PIN from '../../../assets/MAP_PIN.png';

// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=
/*componentDidMount() {
  setLat(37.566535)
  setLong(126.977969);
}*/
const GEO_API = 'AIzaSyD6RJg-Ul1eU863W7kYa9PDkMJpR1bmUis';
const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=서울시 마포구 독막로19길 30,+CA&key=${GEO_API}`;

const Map = ({}) => {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const [homeList, setHomeList] = useRecoilState(homeListState);
  const navigation = useNavigation();

  const pushPage = (next) => {
    return navigation.navigate(next);
  };

  // const getData = async () => {
  //   console.log('get homelist');
  //   try {
  //     const result = await homeApi.getHome();
  //     setHomeList(result);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  useEffect(() => {
    //getData();
    navigator.geolocation.getCurrentPosition(
      (position) => {
        //console.log(position);
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
            <ShowButton onPress={() => pushPage('HomeList')}>
              <ButtonContent>이 지역 매물보기</ButtonContent>
            </ShowButton>
          </ShowButtonBox>
        </>
      )}
    </View>
  );
};

export default Map;

// const Wrapper = styled.View`
//   flex: 1;
// `;
// const MapBox = styled.MapView`
//   flex: 1;
//   height: 100%;
//   width: 100%;
// `;

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
