import React, { useState } from 'react';
import styled from 'styled-components/native';
import Slider from 'react-native-slider';
import { LIGHT_GRAY, MEDIUM_GRAY, PRIMARY_NORMAL } from '../../util/Color';
import UtilText from '../../util/UtilText';

const InputSlider = ({ onChange, min, middle, max, maxValue }) => {
  return (
    <Wrapper>
      <Slider
        minimumTrackTintColor={PRIMARY_NORMAL}
        trackStyle={{ backgroundColor: LIGHT_GRAY }}
        thumbStyle={{
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: LIGHT_GRAY,
        }}
        maximumValue={maxValue}
        // onValueChange={onChange}
        onSlidingComplete={onChange}
      />
      <RangeView>
        <UtilText content={min} size="12px" />
        <UtilText content={middle} size="12px" />
        <UtilText content={max} size="12px" />
      </RangeView>
    </Wrapper>
  );
};

export default InputSlider;

const Wrapper = styled.View``;

const RangeView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
