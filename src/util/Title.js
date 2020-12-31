import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

const Title = ({ name }) => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <UtilButton
        onPress={() => {
          navigation.pop();
        }}
      >
        <BackContent>{'<'}</BackContent>
      </UtilButton>
      <TitleName>
        <TitleContent> {name} </TitleContent>
      </TitleName>
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.View`
  aspect-ratio: 6;
  padding-left: 20px;
  border-bottom-color: #eeeeee;
  border-bottom-width: 1px;
  border-style: solid;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
`;

const UtilButton = styled.TouchableOpacity`
  /* flex: 1; */
  width: 20px;
  /* background-color: red; */
`;

const BackContent = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

const TitleName = styled.View``;
const TitleContent = styled.Text`
  font-size: 20px;
`;
