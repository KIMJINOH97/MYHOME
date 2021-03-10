import React from 'react';
import ContractPresenter from './ContractPresenter';

const ContractContainer = ({ navigation }) => {
  const goPage = (page) => navigation.navigate(page);
  return <ContractPresenter goPage={goPage} />;
};

export default ContractContainer;
