import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import media from '../../style-utils';

const Input = styled.input`
  padding: 17px 19px 14px;

  width: 100%;

  font-size: 15px;
  color: #979797;

  outline-color: transparent;
  border: 1px solid;
  border-radius: 4px;

  border-color: ${props => (props.isValid ? '#d9d9d9' : '#f44252')};

  :active {
  }

  ${media.sm`
    padding: 17px 15px;

    font-size: 18px;

  `};
`;

class InputComponent extends Component {
  onInput = (e) => {
    const { value, name } = e.target;
    const { handleInput, pattern } = this.props;
    const regexp = new RegExp(pattern);

    if (regexp.test(value)) {
      handleInput(value, name);
    }
  };

  render() {
    const {
      placeholder, name, value, isValid,
    } = this.props;
    return (
      <Input
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={this.onInput}
        isValid={isValid}
      />
    );
  }
}

InputComponent.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  pattern: PropTypes.instanceOf(RegExp).isRequired,
};

export default InputComponent;
