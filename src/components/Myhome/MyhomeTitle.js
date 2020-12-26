import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from 'react-native-vector-icons';

const MyhomeTitle = () => {
  return (
    <Wrapper>
      <MyhomeIcon>
        <Ionicons name="home" size={25} color="#ff766a" />
      </MyhomeIcon>
      <TitleContentBox>
        <TitleContent>마이홈</TitleContent>
      </TitleContentBox>
    </Wrapper>
  );
};

export default MyhomeTitle;

const Wrapper = styled.View`
  flex: 1;
  background-color: yellow;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 10px;
`;

const MyhomeIcon = styled.View``;

const TitleContentBox = styled.View``;

const TitleContent = styled.Text`
  height: 30px;
  color: #ff766a;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -2px;
`;
