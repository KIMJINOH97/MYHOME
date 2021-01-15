import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import MORE from '../../../assets/MORE.png';
import { TextStyle } from '../../util/TextStyle';
import {
  PRIMARY_NORMAL,
  LIGHT_GRAY,
  NK700,
  NK500,
  LIGHT_GRAY2,
} from '../../util/Color';

const MyhomeMenuName = ({ name, onPress }) => {
  return (
    <Wrapper>
      <MenuTitle>
        <MenuTitleContent>{name}</MenuTitleContent>
      </MenuTitle>
      <MoreSee onPress={onPress}>
        <MoreSeeContent>더 보기</MoreSeeContent>
        <MoreImage source={MORE} />
      </MoreSee>
    </Wrapper>
  );
};
export default MyhomeMenuName;

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MenuTitle = styled.View`
  height: 24px;
  justify-content: center;
`;

const MenuTitleContent = styled(TextStyle)`
  font-family: ${NK700};
  font-size: 16px;
  color: ${PRIMARY_NORMAL};
`;

const MoreSee = styled.TouchableOpacity`
  height: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MoreSeeContent = styled(TextStyle)`
  font-family: ${NK700};
  font-size: 12px;
  color: ${LIGHT_GRAY};
`;

const MoreImage = styled.Image`
  height: 16px;
  width: 16px;
`;
