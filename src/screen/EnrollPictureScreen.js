import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { Alert, ImagePickerIOS, StatusBar } from 'react-native';
import {
  launchImageLibraryAsync,
  MediaTypeOptions,
  PermissionStatus,
} from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import {
  permissionCameraState,
  photoState,
  formPhotoState,
} from '../states/PhotoState';
import { useRecoilState } from 'recoil';
import { homeApi } from '../api/index';

import Title from '../util/Title';
import UtilText from '../util/UtilText';
import DivideLine from '../util/DivideLine';
import {
  NK500,
  NK400,
  LIGHT_GRAY,
  LIGHT_GRAY2,
  PRIMARY_NORMAL,
  MEDIUM_GRAY,
} from '../util/Color';

import CAMERA_PLUS from '../../assets/CAMERA_PLUS.png';
import DELETE_PHOTO from '../../assets/DELETE_PHOTO.png';
import CompleteButton from '../util/CompleteButton';

const RuleContent = ({ content }) => {
  return (
    <UtilText
      content={content}
      size="14px"
      letter="-0.14px"
      family={NK500}
      color={MEDIUM_GRAY}
    />
  );
};

const EnrollPictureScreen = ({ navigation }) => {
  const [permissionCamera, setPermissionCamera] = useRecoilState(
    permissionCameraState
  );

  const [photo, setPhoto] = useRecoilState(photoState);
  const [formPhoto, setFormPhoto] = useRecoilState(formPhotoState);

  const reqPermission = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== PermissionStatus.GRANTED) {
        Alert.alert('', '사진 업로드를 위해 접근 권한이 필요합니다.');
        setPermissionCamera(false);
      } else {
        setPermissionCamera(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    reqPermission();
  }, []);

  const pickImage = async () => {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.3,
    });
    console.log(result);
    if (!result.cancelled) {
      console.log(result.uri);
      const { uri } = result;
      let uriParts = uri.split('.');
      let fileType = uriParts[uriParts.length - 1];
      let fd = new FormData();
      fd.append('photo', {
        uri,
        name: `photo.${fileType}`,
        type: `image/${fileType}`,
      });
      console.log(typeof fd);
      // const fd = {
      //   uri,
      //   name: `photo.${fileType}`,
      //   type: `image/${fileType}`,
      // };
      console.log(fileType);
      setPhoto([...photo, uri]);
      //onSubmit(fd);
    }
  };

  const pushPhoto = async () => {
    try {
      if (permissionCamera == false) {
        Alert.alert('', '설정에서 갤러리 접근 권한을 활성화 해주세요.');
        return;
      }
      await pickImage();
    } catch (e) {
      console.error(e);
    }
  };

  const removePhoto = (rm) => {
    setPhoto(photo.filter((item) => rm !== item));
  };

  const onSubmit = async (fd) => {
    //const result = await homeApi.postPhoto(fd);
    //console.log(result);
    navigation.pop();
  };

  return (
    <Wrapper>
      <Title name="사진등록"></Title>
      <PhotoContainer>
        <PhotoRule>
          <PhotoTitle>
            <UtilText
              content="사진 등록기준"
              size="16px"
              letter="-0.48px"
              family={NK500}
            />
          </PhotoTitle>
          <DivideLine height="1px" color={LIGHT_GRAY2} />
          <RuleContentView>
            <RuleContent content="- 최소 4장 이상 첨부(전체 방 2장, 화장실 1장, 주방 1장)" />
            <RuleContent content="- 건물 전체 사진(선택)" />
            <RuleContent content="- 광각 렌즈 금지" />
            <RuleContent content="- 창문 나오게 찍기" />
            <RuleContent content="- 다양한 각도로 찍는 것을 권장" />
            <RuleContent content="- 여러 방이 있으면 각 방 사진 모두 첨부" />
          </RuleContentView>
        </PhotoRule>
        <AllPhoto>
          {photo &&
            photo.map((p, index) => {
              return (
                <PhotoBox key={index}>
                  <RemoveIcon>
                    <RemoveIconView onPress={() => removePhoto(p)}>
                      <RemoveIconImage source={DELETE_PHOTO} />
                    </RemoveIconView>
                  </RemoveIcon>
                  <PhotoImageView>
                    <PhotoImage source={{ uri: p }} />
                  </PhotoImageView>
                </PhotoBox>
              );
            })}
          <PhotoBox>
            <DivideLine height="24px" />
            <PhotoPlus onPress={pushPhoto}>
              <PhotoPlusImage source={CAMERA_PLUS} />
            </PhotoPlus>
          </PhotoBox>
        </AllPhoto>
      </PhotoContainer>
      <CompleteButton onPress={onSubmit} name="사진추가 완료" />
    </Wrapper>
  );
};

export default EnrollPictureScreen;
const Wrapper = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: white;
  flex: 1;
`;

const PhotoContainer = styled.View`
  flex: 1;
  padding: 16px;
`;

const PhotoRule = styled.View``;

const PhotoTitle = styled.View`
  margin-bottom: 8px;
`;

const RuleContentView = styled.View`
  margin-vertical: 10px;
`;

const PhotoImageView = styled.View`
  height: 72px;
  width: 108px;
  border-color: ${LIGHT_GRAY};
  border-width: 1px;
`;

const AllPhoto = styled.View`
  flex-grow: 1;
  flex-basis: 0;
  flex-wrap: wrap;
  flex-direction: row;
`;

const PhotoBox = styled.View``;

const PhotoPlus = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-color: ${LIGHT_GRAY};
  border-width: 1px;
  width: 108px;
  height: 72px;
`;

const PhotoPlusImage = styled.Image`
  width: 32px;
  height: 32px;
`;

const PhotoImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const RemoveIconView = styled.TouchableOpacity`
  position: absolute;
  color: ${PRIMARY_NORMAL};
  right: -80px;
  top: 23px;
  z-index: 9999;
`;

const RemoveIcon = styled.View`
  width: 24px;
  height: 24px;
`;

const RemoveIconImage = styled.Image`
  width: 24px;
  height: 24px;
`;
