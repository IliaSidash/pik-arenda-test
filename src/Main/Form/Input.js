import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  margin-bottom: 19px;
  padding: 17px 18px;
  width: 100%;

  font-size: 18px;
  color: #979797;

  border: 1px solid #d9d9d9;
  border-radius: 4px;
`;

const InputComponent = ({ placeholder, value }) => (
  <Input placeholder={placeholder} value={value} />
);

InputComponent.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputComponent;
