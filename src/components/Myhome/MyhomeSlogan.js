import React from 'react';
import styled from 'styled-components/native';
import { TextStyle } from '../../util/TextStyle';
import { DARK_GRAY, NK500, NK700 } from '../../util/Color';
import UtilText from '../../util/UtilText';

const MyhomeSlogan = ({ goPage }) => {
  return (
    <Wrapper>
      <SloganView>
        <SloganContentView>
          <UtilText
            style={{ marginBottom: 8 }}
            content={`멘토와 함께라면${'\n'}직거래도 무섭지 않아`}
            family={NK700}
            letter="-1.1px"
            size="22px"
          />
          <UtilText
            content={`매물 찾기부터 계약까지${'\n'}A to Z 도우미 서비스.`}
            family={NK500}
            color={DARK_GRAY}
            letter="-0.17px"
            size="15px"
          />
        </SloganContentView>
        <MentoApplyButtonView>
          <MentoApplyButton onPress={() => goPage('ApplyMento')}>
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
