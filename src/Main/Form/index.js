import React, { Component } from 'react';
import styled from 'styled-components';
import { set } from 'lodash/fp';

import luhn from '../../luhn';

import Input from './Input';
import Question from '../../ui/Question';
import media from '../../style-utils';

const Form = styled.form`
  max-width: 510px;
  padding: 0 30px 42px;

  ${media.sm`
    margin: 0 auto;
  `};
`;

const Inputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;

const Label = styled.label`
  position: relative;

  margin: 0 10px 19px;
  width: 100%;

  :nth-last-child(-n + 3) {
    width: calc(50% - 20px);

    ${media.sm`
      width: calc(33.3% - 20px);
      margin-bottom: 0;
    `};
  }

  :last-child {
    margin-bottom: 0;
  }
`;

const Row = styled.div`
  margin-top: 23px;
  margin-bottom: 17px;

  ${media.sm`
    display: flex;
    align-items: center;

    margin-top: 31px;
    margin-bottom: 26px;
  `};
`;

const Button = styled.button`
  padding: 17px 63px 13px;
  width: 100%;

  color: #fff;
  font-size: 18px;
  font-family: 'GraphikLCG-Medium';
  line-height: 1.39;
  line-height: 25px;

  border: none;
  border-radius: 4px;
  background-color: #79a9f8;
  cursor: pointer;
  transition: background-color 0.4s;

  &:hover {
    background-color: #2a75f3;
  }

  ${media.sm`
    order: 1;

    width: auto;
  `};
`;

const Note = styled.div`
  margin-bottom: 13px;

  font-size: 15px;
  line-height: 20px;

  ${media.sm`
    order: 2;

    margin-left: 15px;
    margin-bottom: 0;
    
    color: #333333;
  `};

  ${media.md`
    margin-left: 25px;
    margin-right: -65px;

    font-size: 17px;
    line-height: 25px;
  `};
`;

const Safety = styled.div`
  max-width: 380px;
  margin-bottom: 13px;

  font-size: 12px;
  line-height: 15px;

  ${media.sm`
    margin-bottom: 21px;
    
    font-size: 14px;
    line-height: 20px;
  `};
`;

const Img = styled.img`
  margin-right: 18px;

  &:last-child {
    margin-right: 0;
  }
`;

const getInput = (input, inputs, handleInput) => {
  if (input === 'code') {
    return (
      <Label key={input}>
        <Input
          placeholder={inputs[input].placeholder}
          name={input}
          value={inputs[input].value}
          handleInput={handleInput}
          pattern={inputs[input].pattern}
          isValid={inputs[input].isValid}
        />
        <Question text="Код на обороте карты" />
      </Label>
    );
  }
  return (
    <Label key={input}>
      <Input
        placeholder={inputs[input].placeholder}
        name={input}
        value={inputs[input].value}
        handleInput={handleInput}
        pattern={inputs[input].pattern}
        isValid={inputs[input].isValid}
      />
    </Label>
  );
};

class FormComponent extends Component {
  state = {
    inputs: {
      number: {
        placeholder: 'Номер карты',
        value: '',
        isValid: true,
        pattern: /^[0-9]{0,16}$/,
      },
      name: {
        placeholder: 'Имя держателя карты',
        value: '',
        isValid: true,
        pattern: /^[a-zA-Z\s]*$/,
      },
      month: {
        placeholder: 'Месяц',
        value: '',
        isValid: true,
        pattern: /^[0-9]{0,2}$/,
      },
      year: {
        placeholder: 'Год',
        value: '',
        isValid: true,
        pattern: /^[0-9]{0,4}$/,
      },
      code: {
        placeholder: 'CVV',
        value: '',
        isValid: true,
        pattern: /^[0-9]{0,3}$/,
      },
    },
    listOfInputs: ['number', 'name', 'month', 'year', 'code'],
  };

  handleInput = (value, name) => {
    const { inputs } = this.state;
    this.setState({
      inputs: set(`[${name}].value`, value, inputs),
    });
  };

  handleSubmit = (e) => {
    const { inputs, listOfInputs } = this.state;
    let newInputs = { ...inputs };

    e.preventDefault();

    listOfInputs.forEach((input) => {
      if (input === 'number') {
        newInputs = set(`[${input}].isValid`, luhn(newInputs[input].value), newInputs);
      } else {
        newInputs = set(`[${input}].isValid`, newInputs[input].value.length > 0, newInputs);
      }
    });

    this.setState({
      inputs: newInputs,
    });
  };

  render() {
    const { inputs, listOfInputs } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Inputs>{listOfInputs.map(input => getInput(input, inputs, this.handleInput))}</Inputs>

        <Row>
          <Note>Фактом оплаты вы подписываете договор аренды</Note>
          <Button>Оплатить</Button>
        </Row>

        <Safety>
          Защищено сертификатом SSL. Сайт полностью отвечает стандартам безопасности Visa и
          MasterCard
        </Safety>

        <Img src="./static/images/visa.svg" alt="visa" style={{ width: '38px', height: '15px' }} />
        <Img
          src="./static/images/mastercard.svg"
          alt="mastercard"
          style={{ width: '84px', height: '15px' }}
        />
      </Form>
    );
  }
}

export default FormComponent;
