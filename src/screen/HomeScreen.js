import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, Button } from 'react-native';

export default HomeScreen = () => {
  return (
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
      <Button onPress />
      {/* <UploadHome>집 내놓기 &gt;</UploadHome> */}
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  padding: 32px 10px 0px 10px;
`;

const MyhomeTitle = styled.Text`
  margin-bottom: 10px;

  height: 30px;
  color: #ff766a;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -2px;
`;

const MyhomeSlogan = styled.Text`
  /* height: 6rem;
  margin-bottom: 1rem;
  z-index: 1; */
  height: 230px;
  padding: 15px;
  background-color: #ffb8b1;
  border-radius: 7px;
`;

const SloganContent = styled.Text`
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -2px;
`;

const SubContent = styled.Text`
  font-size: 15px;
  font-weight: 700;
`;

// const UploadHome = styled.button`
//   height: 2rem;
//   font-size: 1.2rem;
//   font-weight: 600;
// `;

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
