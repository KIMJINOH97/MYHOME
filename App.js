import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MyHomeStack from './src/components/navigations/MyHomeStack.js';

export default function App() {
  return (
    <SafeAreaProvider style={{ backgroundColor: '#fff' }}>
      <MyHomeStack />
    </SafeAreaProvider>
  );
}
