import React from 'react';
import styled from 'styled-components/native';
import { Ionicons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';

const MyhomeTitle = ({}) => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <TitleContainer>
        <MyhomeIcon>
          <Ionicons name="home" size={25} color="#ff766a" />
        </MyhomeIcon>
        <TitleContentBox>
          <TitleContent>마이홈</TitleContent>
        </TitleContentBox>
      </TitleContainer>
      <MyPageButton>
        <ButtonIcon
          onPress={() => {
            navigation.push('MyPage');
          }}
        >
          <Ionicons name="md-person" size={25} color="blue" />
        </ButtonIcon>
      </MyPageButton>
    </Wrapper>
  );
};

export default MyhomeTitle;

const Wrapper = styled.View`
  flex: 1;
  background-color: yellow;
  flex-direction: row;
  margin-bottom: 10px;
`;

const TitleContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
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

const MyPageButton = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
const ButtonIcon = styled.TouchableOpacity`
  align-items: flex-end;
`;
