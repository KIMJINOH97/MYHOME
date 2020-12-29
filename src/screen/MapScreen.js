import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';

import Map from './Map';

const MapScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
      }}
    >
      <Map />
    </SafeAreaView>
  );
};

export default MapScreen;
