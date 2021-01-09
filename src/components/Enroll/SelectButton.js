import React from 'react';
import styled from 'styled-components/native';

import {
  NK500,
  MEDIUM_GRAY,
  LIGHT_GRAY2,
  PRIMARY_NORMAL,
  LIGHT_GRAY,
} from '../../util/Color';
import { TextStyle } from '../../util/TextStyle';

const SelectButton = ({ onChange, onPress, width = '32%', name, data }) => {
  return (
    <Wrapper width={width}>
      <Button onPress={onChange} data={data}>
        <ButtonContent>{name}</ButtonContent>
      </Button>
    </Wrapper>
  );
};

export default SelectButton;

const Wrapper = styled.View`
  width: ${({ width }) => width};
  border-radius: 8px;
`;

const Button = styled.TouchableOpacity`
  height: 40px;
  background-color: ${({ data }) =>
    data === true ? PRIMARY_NORMAL : LIGHT_GRAY2};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const ButtonContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 16px;
  color: ${MEDIUM_GRAY};
`;
