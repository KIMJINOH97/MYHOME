import React from 'react';
import styled from 'styled-components/native';
import { View, Alert, StatusBar, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useRecoilState } from 'recoil';
import Title from '../../../../util/Title';
import InfoText from '../../../../util/InfoText';
import { InputStyle } from '../../../../util/Input';
import CompleteButton from '../../../../util/CompleteButton';
import InputInText from '../../../../components/Enroll/InputInText';
import SelectButton from '../../../../components/Enroll/SelectButton';

import { putHomeState } from '../../../../states/PutHomeState';

const EnrollDetailsPresenter = ({ goBack }) => {
  const [home, setHome] = useRecoilState(putHomeState);

  const onChangeDeposit = (e) => setHome({ ...home, deposit: parseInt(e) });

  const onChangeMonthly = (e) => setHome({ ...home, monthly_rent: parseInt(e) });

  const onChangeManage = (e) => setHome({ ...home, management_fee: parseInt(e) });

  const onChangeTotalFloor = (e) => setHome({ ...home, total_floor: parseInt(e) });

  const onChangeFloor = (e) => setHome({ ...home, floor: parseInt(e) });

  const onChangeCompletion = (e) => setHome({ ...home, completion_year: parseInt(e) });

  const onChangeSpace = (e) => setHome({ ...home, space: parseInt(e) });

  const onComplete = async () => {
    console.log(home);
    if (home.room_type === '') {
      Alert.alert('', '방종류를 선택해주세요.');
      return;
    }
    if (home.deposit === null || home.management_fee === null || home.monthly_rent === null) {
      Alert.alert('', '가격 및 관리비를 입력해주세요.');
      return;
    }
    if (home.floor === null || home.total_floor === null) {
      Alert.alert('', '층수를 입력해주세요.');
      return;
    }
    if (home.space === null) {
      Alert.alert('', '전용면적을 입력해주세요.');
      return;
    }
    if (home.completion_year === null) {
      Alert.alert('', '준공년도를 입력해주세요.');
      return;
    }
    if (home.heating === '') {
      Alert.alert('', '난방을 선택해주세요.');
      return;
    }
    if (home.occupancy_date === '') {
      Alert.alert('', '입주가능일을 입력해주세요.');
      return;
    }
    if (home.detail === '') {
      Alert.alert('', '상세설명을 입력해주세요.');
      return;
    }
    if (home.introduction === '') {
      Alert.alert('', '한줄 소개를 입력해주세요.');
      return;
    }
    if (home.host_name === '') {
      Alert.alert('', '집주인을 입력해주세요.');
      return;
    }
    if (home.host_phone === '') {
      Alert.alert('', '집주인 전화번호를 입력해주세요.');
      return;
    }
    goBack();
  };

  return (
    <Wrapper>
      <Title name="상세 정보 등록" />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAwareScrollView>
          <DetailContainer>
            <InfoText name="방종류" />
            <ButtonBox>
              <SelectButton
                onChange={() => setHome({ ...home, room_type: '원룸' })}
                data={home.room_type === '원룸'}
                name="원룸"
              />
              <SelectButton
                onChange={() => setHome({ ...home, room_type: '투룸' })}
                data={home.room_type === '투룸'}
                name="투룸"
              />
              <SelectButton
                onChange={() => setHome({ ...home, room_type: '쓰리룸' })}
                data={home.room_type === '쓰리룸'}
                name="쓰리룸"
              />
            </ButtonBox>
            <Money>
              <InfoText name="가격/관리비" />
              <MainMoney>
                <InputInText
                  onChangeText={onChangeDeposit}
                  placeholder="보증금"
                  content="만원"
                  value={home.deposit}
                />
                <InputInText
                  onChangeText={onChangeMonthly}
                  placeholder="월세"
                  content="만원"
                  value={home.monthly_rent}
                />
              </MainMoney>
              <ManageMoney>
                <InputInText
                  onChangeText={onChangeManage}
                  placeholder="관리비"
                  content="만원"
                  value={home.management_fee}
                />
              </ManageMoney>
            </Money>
            <HomeFloor>
              <InfoText name="층수" />
              <HomeFloorView>
                <InputInText
                  onChangeText={onChangeTotalFloor}
                  placeholder="전체층"
                  content="층"
                  value={home.total_floor}
                />
                <InputInText
                  onChangeText={onChangeFloor}
                  placeholder="해당층"
                  content="층"
                  value={home.floor}
                />
              </HomeFloorView>
            </HomeFloor>
            <HomeSize>
              <InfoText name="전용 면적(실평수)" />
              <InputInText value={home.space} onChangeText={onChangeSpace} content={'m\xB2'} />
            </HomeSize>
            <CompletionYear>
              <InfoText name="준공년도" />
              <InputInText
                value={home.completion_year}
                onChangeText={onChangeCompletion}
                content="년"
              />
            </CompletionYear>
            <PlusOption>
              <InfoText name="추가옵션" />
              <ButtonBox>
                <SelectButton
                  onChange={() => setHome({ ...home, desk: !home.desk })}
                  data={home.desk}
                  name="책상"
                />
                <SelectButton
                  onChange={() => setHome({ ...home, bed: !home.bed })}
                  data={home.bed}
                  name="침대"
                />
                <SelectButton
                  onChange={() => setHome({ ...home, short_term: !home.short_term })}
                  data={home.short_term}
                  name="단기임대"
                />
              </ButtonBox>
              <ButtonBox>
                <SelectButton
                  onChange={() => setHome({ ...home, air_conditioner: !home.air_conditioner })}
                  data={home.air_conditioner}
                  name="에어컨"
                />
                <SelectButton
                  onChange={() => setHome({ ...home, induction: !home.induction })}
                  data={home.induction}
                  name="인덕션"
                />
                <SelectButton
                  onChange={() => setHome({ ...home, elevator: !home.elevator })}
                  data={home.elevator}
                  name="엘리베이터"
                />
              </ButtonBox>
              <ButtonBox>
                <SelectButton
                  onChange={() => setHome({ ...home, refrigerator: !home.refrigerator })}
                  data={home.refrigerator}
                  name="냉장고"
                />
                <SelectButton
                  onChange={() => setHome({ ...home, washer: !home.washer })}
                  data={home.washer}
                  name="세탁기"
                />
                <View style={{ width: '32%' }} />
              </ButtonBox>
            </PlusOption>
            <Boiler>
              <InfoText name="난방" />
              <ButtonBox>
                <SelectButton
                  onChange={() => setHome({ ...home, heating: true })}
                  data={home.heating}
                  name="중앙"
                  width="47%"
                />
                <SelectButton
                  onChange={() => setHome({ ...home, heating: false })}
                  data={home.heating === false}
                  name="개별"
                  width="47%"
                />
              </ButtonBox>
            </Boiler>
            <MoveIn>
              <InfoText name="입주가능일" />
              <Input
                defaultValue={home.occupancy_date ? home.occupancy_date : ''}
                onChangeText={(occupancy_date) => setHome({ ...home, occupancy_date })}
                placeholder="2010-10-10형식"
              />
            </MoveIn>
            <DetailExplain>
              <InfoText name="상세설명" />
              <Input
                defaultValue={home.detail ? home.detail : ''}
                style={{ textAlignVertical: 'top' }}
                onChangeText={(detail) => setHome({ ...home, detail })}
                multiline
                height="180px"
                placeholder="일조량, 보안, 리모델링 여부, 교통 및 주변 편의시설 관련 정보 작성"
              />
            </DetailExplain>
            <OneLineInfo>
              <InfoText name="한줄소개" />
              <Input
                defaultValue={home.introduction ? home.introduction : ''}
                onChangeText={(introduction) => setHome({ ...home, introduction })}
                multiline
                placeholder="ex) 햇빛 좋은 방"
              />
            </OneLineInfo>
            <HostName>
              <InfoText name="집주인 이름" />
              <Input
                defaultValue={home.host_name ? home.host_name : ''}
                onChangeText={(host_name) => setHome({ ...home, host_name })}
                multiline
                placeholder="한글 또는 영문만 입력 가능"
              />
            </HostName>
            <HostPhone>
              <InfoText name="집주인 전화번호" />
              <Input
                defaultValue={home.host_phone ? home.host_phone : ''}
                onChangeText={(host_phone) => setHome({ ...home, host_phone })}
                placeholder="-없이 입력"
              />
            </HostPhone>
          </DetailContainer>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
      <CompleteButton onPress={onComplete} name="상세정보 입력 완료" />
    </Wrapper>
  );
};

export default EnrollDetailsPresenter;
const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: white;
  flex: 1;
`;

const ButtonBox = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 8px;
`;

const DetailContainer = styled.ScrollView`
  padding-horizontal: 16px;
`;

const DetailExplain = styled.View``;

const Input = styled(InputStyle)`
  justify-content: flex-start;
  height: ${({ height }) => height || '40px'};
`;

const OneLineInfo = styled.View``;

const HostName = styled.View``;

const HostPhone = styled.View``;

const MoveIn = styled.View``;

const CompletionYear = styled.View``;

const HomeSize = styled.View``;

const HomeFloor = styled.View``;

const HomeFloorView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Money = styled.View``;

const MainMoney = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const ManageMoney = styled.View``;

const PlusOption = styled.View``;

const Boiler = styled.View``;
