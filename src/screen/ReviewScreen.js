import React, { useState } from 'react';
import styled from 'styled-components/native';
import { StatusBar, Image, Alert } from 'react-native';
import Title from '../util/Title';
import Stars from 'react-native-stars';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { TextStyle } from '../util/TextStyle';
import { NK500, NK700, PRIMARY_NORMAL } from '../util/Color';
import InfoText from '../util/InfoText';
import { InputStyle } from '../util/Input';
import UtilButton from '../util/UtilButton';
import { useRecoilState } from 'recoil';
import { presentHomeState } from '../states/HomeListState';

import STAR_FULL from '../../assets/STAR_FULL.png';
import STAR_HALF from '../../assets/STAR_HALF.png';
import STAR_EMPTY from '../../assets/STAR_EMPTY.png';
import { homeApi } from '../api';
import { userState } from '../states/LoginState';

const ReviewScreen = ({ navigation }) => {
  const [user] = useRecoilState(userState);
  const [score, setScore] = useState(0);
  const [pros, setPros] = useState('');
  const [cons, setCons] = useState('');
  const [content, setContent] = useState('');
  const [presentHome, setPresentHome] = useRecoilState(presentHomeState);

  const onSubmitReview = async () => {
    try {
      if (user === null) {
        Alert.alert('', '로그인 후 이용해주세요.');
        return;
      }
      const result = await homeApi.postReview(
        presentHome.id,
        score,
        pros,
        cons,
        content
      );
      if (result) {
        Alert.alert('', '리뷰를 남겼습니다.');
        const home = await homeApi.getPresentHome(presentHome.id);
        setPresentHome(home);
        navigation.pop();
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Wrapper>
      <Title name="리뷰 작성"></Title>
      <KeyboardAwareScrollView>
        <ReviewContainer>
          <ReviewStar>
            <InfoText name="별점" />
            <StarContent>
              <Stars
                default={0}
                count={5}
                half={true}
                starSize={36}
                fullStar={<StarImage source={STAR_FULL} />}
                emptyStar={<StarImage source={STAR_EMPTY} />}
                halfStar={<StarImage source={STAR_HALF} />}
                update={(score) => setScore(score)}
              />
              <ReviewScore>{Number.parseFloat(score).toFixed(1)}</ReviewScore>
            </StarContent>
          </ReviewStar>
          <InfoText name="장점" />
          <Input
            onChangeText={(e) => setPros(e)}
            placeholder="이 집의 장점을 입력해주세요"
          />
          <InfoText name="단점" />
          <Input
            onChangeText={(e) => setCons(e)}
            placeholder="이 집의 단점을 입력해주세요"
          />
          <InfoText name="한줄 평" />
          <Input
            style={{ height: 128 }}
            onChangeText={(e) => setContent(e)}
            placeholder="이 집에 대한 한줄평을 입력해주세요"
          />
          <UtilButton name="리뷰 등록하기" onPress={onSubmitReview} />
        </ReviewContainer>
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default ReviewScreen;

const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: white;
  flex: 1;
`;

const StarImage = styled.Image`
  width: 36px;
  height: 36px;
`;

const ReviewContainer = styled.View`
  flex: 10;
  padding-horizontal: 16px;
  padding-vertical: 10px;
`;

const ReviewStar = styled.View`
  align-items: flex-start;
  margin-bottom: 16px;
`;

const StarContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ReviewScore = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 18px;
  color: ${PRIMARY_NORMAL};
  letter-spacing: -0.54px;
  margin-left: 10px;
`;

const Input = styled(InputStyle)`
  height: 72px;
  margin-bottom: 10px;
  text-align-vertical: top;
`;
