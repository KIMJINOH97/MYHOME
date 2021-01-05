import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import MORE from '../../../assets/MORE.png';
import { PRIMARY_NORMAL, LIGHT_GRAY, NK700, NK500 } from '../../util/Color';

const MyhomeMenuName = ({ name }) => {
  return (
    <Wrapper>
      <MenuTitle>
        <Text style={styles.menuTitle}>{name}</Text>
      </MenuTitle>
      <MoreSee>
        <Text style={styles.more}>더 보기</Text>
        <MoreImage source={MORE} />
      </MoreSee>
    </Wrapper>
  );
};
export default MyhomeMenuName;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const MenuTitle = styled.View`
  height: 24px;
  justify-content: center;
`;

const MoreSee = styled.TouchableOpacity`
  height: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MoreImage = styled.Image`
  height: 16px;
  width: 16px;
`;

const styles = StyleSheet.create({
  menuTitle: {
    fontFamily: NK700,
    fontSize: 16,
    color: PRIMARY_NORMAL,
  },
  more: {
    fontFamily: NK700,
    fontSize: 12,
    color: LIGHT_GRAY,
  },
});
