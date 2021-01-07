import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

import { TextStyle } from '../../util/TextStyle';
import {
  DARK_GRAY,
  LIGHT_GRAY,
  NK500,
  NK400,
  MEDIUM_GRAY,
} from '../../util/Color';

const DetailContent = ({ name, info, alignItem = 'center' }) => {
  return (
    <Wrapper alignItem={alignItem}>
      <NameView>
        <NameContent>{name}</NameContent>
      </NameView>
      <View>
        <Content>{info}</Content>
      </View>
    </Wrapper>
  );
};

export default DetailContent;

const Wrapper = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: ${({ alignItem }) => alignItem};
`;

const NameView = styled.View``;

const NameContent = styled(TextStyle)`
  font-family: ${NK500};
  width: 80px;
  font-size: 16px;
  color: ${DARK_GRAY};
  letter-spacing: -0.48px;
`;

const Content = styled(TextStyle)`
  font-family: ${NK400};
  width: 260px;
  font-size: 14px;
  color: ${MEDIUM_GRAY};
`;
