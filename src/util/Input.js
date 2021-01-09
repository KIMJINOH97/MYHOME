import React from 'react';
import styled from 'styled-components/native';

import { LIGHT_GRAY } from '../util/Color';
import { NK500 } from '../util/Color';

const Input = ({}) => {
  return <Wrapper></Wrapper>;
};

export default Input;

export const InputStyle = styled.TextInput`
  font-family: ${NK500};
  include-font-padding: false;
  width: 100%;
  height: 48px;
  padding: 6px;
  background-color: white;
  border: 1px solid ${LIGHT_GRAY};
  border-radius: 4px;
`;
