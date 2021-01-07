import React from 'react';
import styled from 'styled-components/native';
import { DARK_GRAY, NK500 } from '../../util/Color.js';

import { TextStyle } from '../../util/TextStyle';
import APPLY_CHECK from '../../../assets/APPLY_CHECK.png';

const WantListFrame = ({ content }) => {
  return (
    <Wrapper>
      <CheckIcon>
        <CheckImage source={APPLY_CHECK} />
      </CheckIcon>
      <WantListContent>{content}</WantListContent>
    </Wrapper>
  );
};

export default WantListFrame;

const Wrapper = styled.View`
  flex-direction: row;
  padding-bottom: 16px;
  width: 80%;
`;

const CheckIcon = styled.View`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const CheckImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const WantListContent = styled(TextStyle)`
  font-family: ${NK500};
  color: ${DARK_GRAY};
  font-size: 16px;
  letter-spacing: -0.48px;
`;
