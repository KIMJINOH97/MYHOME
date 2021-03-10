import React from 'react';
import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Title from '../../../util/Title';
import UtilButton from '../../../util/UtilButton';

const ContractPresenter = ({ goPage }) => {
  return (
    <Wrapper>
      <Title name="계약서" />
      <ContractFrame>
        <Contract />
        <UtilButton name="계약서 결제하기" onPress={() => goPage('Pay')} />
      </ContractFrame>
    </Wrapper>
  );
};

export default ContractPresenter;

const Wrapper = styled.View`
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? 0 : StatusBar.currentHeight}px;
  background-color: #fff;
`;

const ContractFrame = styled.View`
  flex: 1;
  padding: 16px;
`;

const Contract = styled.View`
  flex: 1;
  height: 100%;
  border: 1px solid #9e9e9e;
`;
