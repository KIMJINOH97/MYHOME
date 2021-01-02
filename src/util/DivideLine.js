import React from 'react';
import styled from 'styled-components/native';

const DivideLine = ({ height = '10px', color = 'white' }) => {
  return <Wrapper height={height} color={color}></Wrapper>;
};

export default DivideLine;

const Wrapper = styled.View`
  height: ${({ height }) => height};
  background-color: ${({ color }) => color};
`;
