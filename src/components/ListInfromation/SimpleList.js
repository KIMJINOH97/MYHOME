import React from 'react';
import styled from 'styled-components/native';

import { DARK_GRAY, NK500 } from '../../util/Color';
import { TextStyle } from '../../util/TextStyle';

const SimpleList = ({ img, info }) => {
  return (
    <SimpleListView>
      <SimpleListImage source={img}></SimpleListImage>
      <SimpleContent>{info}</SimpleContent>
    </SimpleListView>
  );
};

export default SimpleList;

const SimpleListView = styled.View`
  align-items: center;
`;
const SimpleListImage = styled.Image`
  height: 48px;
  width: 48px;
`;

const SimpleContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 16px;
  letter-spacing: -0.48px;
  color: ${DARK_GRAY};
`;
