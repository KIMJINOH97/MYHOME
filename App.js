import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import AppLoading from 'expo-app-loading';
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
import MyHomeStack from './src/components/navigations/MyHomeStack';
import SPLASH_ from './assets/SPLASH_.png';
import Onboarding from './src/screen/main/OnboardingScreen/index';

// const getFonts = () =>
//   Font.loadAsync({
//     NotoKR_Bold: require('./assets/font/NotoSansKR-Bold.otf'),
//   });

export default function App() {
  const [fontsLoaded] = useFonts({
    NotoSansKR_100Thin,
    NotoSansKR_300Light,
    NotoSansKR_400Regular,
    NotoSansKR_500Medium,
    NotoSansKR_700Bold,
    NotoSansKR_900Black,
  });

  const [ready, setReady] = useState(false);
  const [isOnboard, setIsOnboard] = useState(true);

  const toggle = () => {
    setIsOnboard(false);
  };

  setTimeout(() => {
    setReady(true);
  }, 2000);

  if (fontsLoaded) {
    return (
      <RecoilRoot>
        {ready ? (
          <SafeAreaProvider>
            {isOnboard ? <Onboarding toggle={toggle} /> : <MyHomeStack />}
          </SafeAreaProvider>
        ) : (
          <Wrapper>
            <LogoImage source={SPLASH_} />
          </Wrapper>
        )}
      </RecoilRoot>
    );
  }
  return <AppLoading />;
}

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.Image`
  width: 83px;
  height: 48px;
`;
