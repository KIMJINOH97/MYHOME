import React from 'react';
import styled from 'styled-components/native';

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
`;

const TitleName = styled.View``;

const TitleContent = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;
