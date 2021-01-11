import React from 'react';
import styled from 'styled-components/native';

import { TextStyle } from './TextStyle';
import { NK500, PRIMARY_NORMAL } from './Color';

const UtilButton = ({ name, onPress }) => {
  return (
    <SignUpButtonBox>
      <SignUpButton onPress={onPress}>
        <SignUpButtonContent>{name}</SignUpButtonContent>
      </SignUpButton>
    </SignUpButtonBox>
  );
};

export default UtilButton;

const SignUpButtonBox = styled.View`
  margin-top: 10px;
  height: 48px;
`;

const SignUpButton = styled.TouchableOpacity`
  height: 100%;
  background-color: ${PRIMARY_NORMAL};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const SignUpButtonContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 18px;
  color: white;
`;
