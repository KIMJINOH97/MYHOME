import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import MyHomeStack from './src/components/navigations/MyHomeStack.js';
import {
  useFonts,
  NotoSansKR_100Thin,
  NotoSansKR_300Light,
  NotoSansKR_400Regular,
  NotoSansKR_500Medium,
  NotoSansKR_700Bold,
  NotoSansKR_900Black,
} from '@expo-google-fonts/noto-sans-kr';

import { RecoilRoot } from 'recoil';

// const getFonts = () =>
//   Font.loadAsync({
//     NotoKR_Bold: require('./assets/font/NotoSansKR-Bold.otf'),
//   });

export default function App() {
  let [fontsLoaded] = useFonts({
    NotoSansKR_100Thin,
    NotoSansKR_300Light,
    NotoSansKR_400Regular,
    NotoSansKR_500Medium,
    NotoSansKR_700Bold,
    NotoSansKR_900Black,
  });

  if (fontsLoaded) {
    return (
      <RecoilRoot>
        <SafeAreaProvider>
          <MyHomeStack />
        </SafeAreaProvider>
      </RecoilRoot>
    );
  } else {
    return <AppLoading />;
  }
}
