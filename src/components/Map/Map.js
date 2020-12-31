import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet } from 'react-native';

// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=
/*componentDidMount() {
  setLat(37.566535)
  setLong(126.977969);
}*/
const ADDRESS = '1600+Amphitheatre+Parkway,+Mountain+View';
const GEO_API = 'AIzaSyD6RJg-Ul1eU863W7kYa9PDkMJpR1bmUis';
const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=서울시 마포구 독막로19길 30,+CA&key=${GEO_API}`;

const Map = () => {
  const [lat, setLat] = useState(37.566535);
  const [long, setLong] = useState(126.977969);
  const getData = async () => {
    console.log('dkdkdkdkdk');
    try {
      const { data } = await axios.get(URL);
      console.log(URL);
      console.log(data.results);
      console.log(data.results[0].geometry.location.lat);
      console.log(data.results[0].geometry.location.lng);
      setLat(data.results[0].geometry.location.lat);
      setLong(data.results[0].geometry.location.lng);
    } catch (e) {
      console.log(e);
    }
  };

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
      }
    );
  }, []);

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      loadingEnabled={true}
      region={{
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
      style={styles.map}
    >
      <Marker
        style={styles.marker}
        coordinate={{ latitude: lat, longitude: long }}
        image={require('../../pin.png')}
        title="Peng hi"
        description="my name is pengsu"
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text>ihihi</Text>
            </View>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  bubble: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
});
