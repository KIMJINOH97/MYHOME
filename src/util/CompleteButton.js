import React from 'react';
import styled from 'styled-components/native';

import { PRIMARY_NORMAL } from '../util/Color';
const CompleteButton = ({ name }) => {
  return (
    <PutHomeButtonBox>
      <PutHomeButton>
        <ButtonContent>{name}</ButtonContent>
      </PutHomeButton>
    </PutHomeButtonBox>
  );
};

export default CompleteButton;

const PutHomeButtonBox = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: flex-end;
`;

const PutHomeButton = styled.TouchableOpacity`
  width: 100%;
  height: 80px;
  align-items: center;
  padding-top: 10px;
  background-color: ${PRIMARY_NORMAL};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const ButtonContent = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: 700;
`;
