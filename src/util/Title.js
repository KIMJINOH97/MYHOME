import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

import { TextStyle } from '../util/TextStyle';
import { NK500 } from '../util/Color';
import LEFT from '../../assets/LEFT.png';

const Title = ({ name, onPressback = null }) => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <UtilButton
        onPress={() => {
          navigation.pop();
        }}
      >
        <BackContent source={LEFT} />
      </UtilButton>
      <TitleName>
        <TitleContent> {name} </TitleContent>
      </TitleName>
      <View style={{ width: 24 }}></View>
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.View`
  aspect-ratio: 6;
  padding-horizontal: 20px;
  border-bottom-color: #eeeeee;
  border-bottom-width: 1px;
  border-style: solid;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const UtilButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  /* background-color: red; */
`;

const BackContent = styled.Image`
  width: 100%;
  height: 100%;
`;

const TitleName = styled.View``;

const TitleContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 20px;
`;
