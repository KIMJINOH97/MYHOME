import React from 'react';
import styled from 'styled-components/native';
import { NK900 } from '../../util/Color.js';
import UtilText from '../../util/UtilText.js';

const WayOrder = ({ number, order }) => {
  return (
    <Wrapper>
      <WayBox>
        <UtilText content={number} family={NK900} size="18px" />
        <UtilText content={order} family={NK900} size="18px" />
      </WayBox>
    </Wrapper>
  );
};

export default WayOrder;

const Wrapper = styled.View`
  margin-bottom: 5px;
`;

const WayBox = styled.View`
  width: 200px;
  height: 80px;
  border-radius: 10px;
  border: 1px #e0e0e0;
  background-color: #e0e0e0;
  justify-content: center;
  align-items: center;
`;
