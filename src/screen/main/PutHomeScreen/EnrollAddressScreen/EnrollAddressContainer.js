import React, { useState } from 'react';
import EnrollAddressPresenter from './EnrollAddressPresenter';

const EnrollAddressContainer = ({ navigation }) => {
  const goBack = () => navigation.pop();
  const [isOpen, setIsOpen] = useState(false);
  const handleFindAddress = () => setIsOpen(!isOpen);

  return (
    <EnrollAddressPresenter goBack={goBack} handleFindAddress={handleFindAddress} isOpen={isOpen} />
  );
};

export default EnrollAddressContainer;
