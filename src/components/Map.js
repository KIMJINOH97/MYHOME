import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';

const Map = () => {
  return (
    <MapView
      loadingEnabled={true}
      region={{
        latitude: 37.5326,
        longitude: 127.024612,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
      style={styles.map}
    ></MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
});
