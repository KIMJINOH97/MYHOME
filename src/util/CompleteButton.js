import React from 'react';
import styled from 'styled-components/native';

import { TextStyle } from './TextStyle';
import { NK500, PRIMARY_NORMAL } from './Color';

const CompleteButton = ({ height = '80px', name, onPress }) => {
  return (
    <PutHomeButtonBox>
      <PutHomeButton height={height} onPress={onPress}>
        <ButtonContent>{name}</ButtonContent>
      </PutHomeButton>
    </PutHomeButtonBox>
  );
};

export default CompleteButton;

const PutHomeButtonBox = styled.View`
  width: 100%;
  justify-content: flex-end;
`;

const PutHomeButton = styled.TouchableOpacity`
  width: 100%;
  height: ${({ height }) => height};
  align-items: center;
  padding-top: 10px;
  background-color: ${PRIMARY_NORMAL};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const ButtonContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 20px;
  letter-spacing: -1px;
  color: white;
`;
