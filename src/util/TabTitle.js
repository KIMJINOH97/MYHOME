import React from 'react';
import styled from 'styled-components/native';

import { NK700 } from './Color';
import { TextStyle } from './TextStyle';

const TabTitle = ({ name }) => {
  return (
    <Wrapper>
      <TitleName>
        <TitleContent> {name} </TitleContent>
      </TitleName>
    </Wrapper>
  );
};

export default TabTitle;

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-bottom-color: #eeeeee;
  border-bottom-width: 1px;
  border-style: solid;
  background-color: white;
`;

const TitleName = styled.View``;

const TitleContent = styled(TextStyle)`
  font-family: ${NK700};
  font-size: 20px;
`;
