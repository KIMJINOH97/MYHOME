import { useNavigation } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

import { TextStyle } from './TextStyle';
import { NK700 } from './Color';
import LEFT from '../../assets/LEFT.png';
import CLOSE from '../../assets/CLOSE.png';

const Title = ({ back = true, name, onPress = null, close = false }) => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      {back ? (
        <UtilButton onPress={onPress || (() => navigation.pop())}>
          <BackContent source={close ? CLOSE : LEFT} />
        </UtilButton>
      ) : (
        <View style={{ width: 24 }} />
      )}
      <TitleName>
        <TitleContent> {name} </TitleContent>
      </TitleName>
      <View style={{ width: 24 }} />
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
`;

const BackContent = styled.Image`
  width: 100%;
  height: 100%;
`;

const TitleName = styled.View``;

const TitleContent = styled(TextStyle)`
  font-family: ${NK700};
  font-size: 20px;
`;
