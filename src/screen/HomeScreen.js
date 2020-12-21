import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
      <Wrapper>
        <MyhomeTitle>&#9924; 마이홈</MyhomeTitle>
        <MyhomeSlogan>
          <SloganContent>
            이 집 살아보니{'\n'}괜찮더라{'\n'}
          </SloganContent>
          <SubContent>
            {'\n'}
            대학생을 위한{'\n'}자취방 직거래 플랫폼{'\n'}'마이홈'입니다.
          </SubContent>
        </MyhomeSlogan>
        <MapButton title="go about" onPress={() => navigation.push('About')}>
          <ButtonContent>map</ButtonContent>
        </MapButton>
        {/* <UploadHome>집 내놓기 &gt;</UploadHome> */}
      </Wrapper>
    </SafeAreaView>
  );
};

const Wrapper = styled(View)`
  padding: 32px 12px 0px 12px;
`;

const MyhomeTitle = styled.Text`
  display: flex;
  margin-bottom: 10px;

  height: 30px;
  color: #ff766a;
  font-size: 23px;
  font-weight: 700;
  justify-content: flex-end;
  letter-spacing: -2px;
`;

const MyhomeSlogan = styled.Text`
  height: 230px;
  padding: 15px;
  background-color: #ffb8b1;
  border-radius: 8px;
`;

const SloganContent = styled.Text`
  font-size: 35px;
  font-weight: 700;
  letter-spacing: -2px;
`;

const SubContent = styled.Text`
  font-size: 15px;
  font-weight: 700;
`;

const MapButton = styled.TouchableOpacity`
  display: flex;
  height: 50px;
  width: 50px;
  background-color: blue;
  border-radius: 10px;
  font-weight: 600;
  justify-content: center;
`;

const ButtonContent = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: 600;
`;

// const HommiePicture = styled.img`
//   height: 6rem;
//   width: 6rem;
//   position: fixed;
//   top: 8rem;
//   left: 13rem;
// `;

const University = styled.Text`
  display: flex;
`;

// const YonseiBox = styled.button`
//   width: 8rem;
//   height: 8.3rem;
//   border-radius: 0.4rem;
//   background-color: black;
// `;

// const EwhaBox = styled.button`
//   width: 8rem;
//   height: 8.3rem;
//   border-radius: 0.4rem;
//   background-color: black;
// `;
