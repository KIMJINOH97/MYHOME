import React from 'react';
import styled from 'styled-components/native';

import { TextStyle } from './TextStyle';

import { NK700, NK400, NK500, PRIMARY_NORMAL, MEDIUM_GRAY } from './Color';

//      <Review name="거주후기 " length={comments.length} />

const Review = ({ name, length, review = '리뷰', onPress }) => {
  return (
    <ReviewTitle>
      <TitleBox>
        <DetailTitleContent>{name} </DetailTitleContent>
        <DetailCount>
          <DetailCountContent>{length}개</DetailCountContent>
        </DetailCount>
      </TitleBox>
      <ReviewButtonView>
        <ReviewButton onPress={onPress}>
          <ReviewButtonContent>{review} 작성</ReviewButtonContent>
        </ReviewButton>
      </ReviewButtonView>
    </ReviewTitle>
  );
};

export default Review;

const DetailTitleContent = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 16px;
  letter-spacing: -0.48px;
`;

const ReviewTitle = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 10px;

  width: 100%;
  height: 32px;
`;

const TitleBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

const DetailCount = styled.View``;

const DetailCountContent = styled(TextStyle)`
  font-family: ${NK400};
  font-size: 14px;
  color: ${MEDIUM_GRAY};
  letter-spacing: -0.14px;
`;

const ReviewButtonView = styled.View`
  width: 80px;
  height: 32px;
`;

const ReviewButton = styled.TouchableOpacity`
  width: 80px;
  height: 32px;
  border-color: ${PRIMARY_NORMAL};
  border-width: 1px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const ReviewButtonContent = styled(TextStyle)`
  font-family: ${NK700};
  font-size: 15px;
  letter-spacing: -0.45px;
  color: ${PRIMARY_NORMAL};
`;
