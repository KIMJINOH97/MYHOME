import React from 'react';
import { Image } from 'react-native';
import Stars from 'react-native-stars';

import STAR_FULL from '../../assets/STAR_FULL.png';
import STAR_EMPTY from '../../assets/STAR_EMPTY.png';

const Star = ({ up = false, score, width = 13, height = 12 }) => {
  return (
    <Stars
      display={score}
      default={0}
      count={5}
      half={true}
      starSize={5}
      fullStar={
        <Image style={{ width: width, height: height }} source={STAR_FULL} />
      }
      emptyStar={
        <Image style={{ width: width, height: height }} source={STAR_EMPTY} />
      }
      update={(val) => this.setState({ stars: val })}
    />
  );
};

export default Star;
