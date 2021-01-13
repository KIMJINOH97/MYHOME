import React from 'react';
import styled from 'styled-components/native';
import { LIGHT_GRAY, LIGHT_GRAY2, MEDIUM_GRAY, NK500 } from '../../util/Color';
import { TextStyle } from '../../util/TextStyle';
import DivideLine from '../../util/DivideLine';

import MORE_RIGHT from '../../../assets/MORE_RIGHT.png';

const CheckList = ({ height = '1px', content, img }) => {
  return (
    <>
      <DivideLine height={height} color={'rgba(238, 238, 238, 0.4)'} />
      <Wrapper>
        <CheckIcon>
          <CheckImage source={img} />
        </CheckIcon>
        <CheckTitle>
          <CheckContent>{content}</CheckContent>
        </CheckTitle>
        <RightView>
          <RightImage source={MORE_RIGHT} />
        </RightView>
      </Wrapper>
    </>
  );
};

export default CheckList;

const Wrapper = styled.View`
  height: 56px;
  padding-horizontal: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

const CheckIcon = styled.View`
  width: 24px;
  height: 24px;
`;

const CheckImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const CheckTitle = styled.View`
  justify-content: flex-start;
  width: 80%;
`;

const CheckContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 18px;
  letter-spacing: -0.54px;
`;

const RightView = styled.View`
  width: 24px;
  height: 24px;
`;

const RightImage = styled.Image`
  width: 100%;
  height: 100%;
`;
