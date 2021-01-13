import React from 'react';
import styled from 'styled-components/native';
import { TextStyle } from '../../util/TextStyle';
import { PRIMARY_LIGHT2, DARK_GRAY, NK500, NK700 } from '../../util/Color';

const MyhomeSlogan = ({ navigation }) => {
  const nextPage = (page) => navigation.push(page);
  return (
    <Wrapper>
      <SloganView>
        <SloganContentView>
          <SloganContentFirst>
            멘토와 함께라면{'\n'}직거래도 무섭지 않아
          </SloganContentFirst>
          <SloganContentSecond>
            매물 찾기부터 계약까지{'\n'}A to Z 도우미 서비스.
          </SloganContentSecond>
        </SloganContentView>
        <MentoApplyButtonView>
          <MentoApplyButton onPress={() => nextPage('ApplyMento')}>
            <MentoApplyButtonContent>멘토신청하기</MentoApplyButtonContent>
          </MentoApplyButton>
        </MentoApplyButtonView>
      </SloganView>
    </Wrapper>
  );
};

export default MyhomeSlogan;

const Wrapper = styled.View`
  flex: 4.3;
`;

const SloganView = styled.View`
  display: flex;
  height: 216px;
  padding-horizontal: 16px;
  padding-top: 23px;
  padding-bottom: 21px;
  background-color: rgba(255, 184, 177, 0.5);
  border-radius: 6px;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const SloganContentFirst = styled(TextStyle)`
  font-family: ${NK700};
  font-size: 22px;
  letter-spacing: -1.1px;
  margin-bottom: 8px;
`;

const SloganContentSecond = styled(TextStyle)`
  font-family: ${NK500};
  font-size: 15px;
  letter-spacing: -0.17px;
  color: ${DARK_GRAY};
`;

const SloganContentView = styled.View``;

const MentoApplyButtonView = styled.View`
  height: 40px;
`;

const MentoApplyButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const MentoApplyButtonContent = styled(TextStyle)`
  align-items: center;
  font-family: ${NK700};
  font-size: 16px;
`;
