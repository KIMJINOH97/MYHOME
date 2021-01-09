import React from 'react';
import styled from 'styled-components/native';

import { TextStyle } from '../../util/TextStyle';
import { NK500, DARK_GRAY, LIGHT_GRAY } from '../../util/Color';

const InputInText = ({ value, content, placeholder, onChangeText }) => {
  return (
    <Wrapper>
      <NewInput
        value={value ? `${value}` : ''}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
      <InputContent>{content}</InputContent>
    </Wrapper>
  );
};

export default InputInText;

const Wrapper = styled.View`
  width: 47%;
  padding-left: 6px;
  padding-right: 10px;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
  border: ${LIGHT_GRAY};
  flex-direction: row;
  height: 40px;
`;

const NewInput = styled.TextInput`
  font-family: ${NK500};
  include-font-padding: false;
  color: black;
  background-color: white;
  width: 80%;
`;

const InputContent = styled(TextStyle)`
  font-family: ${NK500};
  color: ${DARK_GRAY};
  letter-spacing: -0.48px;
  font-size: 16px;
`;
