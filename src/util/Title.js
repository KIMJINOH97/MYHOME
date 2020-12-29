import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

const Title = () => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <UtilButton
        onPress={() => {
          navigation.pop();
        }}
      >
        <BackContent>{'<'}</BackContent>
        <TitleName>
          <TitleContent>로그인 </TitleContent>
        </TitleName>
      </UtilButton>
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.View`
  flex: 1;
  padding-left: 30px;
  background-color: yellow;
`;

const UtilButton = styled.TouchableOpacity`
  flex: 1;
`;

const BackContent = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

const TitleName = styled.View``;
const TitleContent = styled.Text`
  font-size: 20px;
`;
