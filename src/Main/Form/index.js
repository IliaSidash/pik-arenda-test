import React from 'react';
import styled from 'styled-components';

import Input from './Input';
import Question from '../../ui/Question';

const Form = styled.form`
  max-width: 510px;
  margin: 0 auto;
  padding-right: 61px;
`;

const StyledInput = styled(Input)``;

const GroupedInputs = styled.div`
  display: flex;
  margin: 0 -10px;
  input {
    width: calc(33.3% - 20px);
    margin: 0 10px;
  }
`;

const CustomInput = styled.div`
  position: relative;

  width: calc(33.3% - 20px);
  margin: 0 10px;

  input {
    width: 100%;
    margin: 0;
  }
`;

const Row = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 23px;
`;

const Button = styled.button`
  padding: 18px 58px 19px;

  font-size: 18px;
  font-family: 'GraphikLCG-Medium';
  line-height: 25px;
  color: #fff;
  border: none;
  border-radius: 4px;
  background-color: #79a9f8;
  cursor:pointer;
  transition: background-color: .4s;

  &:hover{
    background-color: #2a75f3;
  }
`;

const Note = styled.div`
  margin-left: 25px;
  margin-right: -65px;

  font-family: 'GraphikLCG-Regular';
  font-size: 17px;
  line-height: 25px;
`;

const Safety = styled.div`
  max-width: 380px;
  margin-bottom: 20px;

  font-size: 14px;
  line-height: 20px;
`;

const Img = styled.img`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

export default () => (
  <Form>
    <Input placeholder="Номер карты" />
    <Input placeholder="Имя держателя карты" />
    <GroupedInputs>
      <StyledInput placeholder="Месяц" />
      <StyledInput placeholder="Год" />
      <CustomInput>
        <StyledInput placeholder="CVV" />
        <Question />
      </CustomInput>
    </GroupedInputs>
    <Row>
      <Button>Отправить</Button>
      <Note>Фактом оплаты вы подписываете договор аренды</Note>
    </Row>
    <Safety>
      Защищено сертификатом SSL. Сайт полностью отвечает стандартам безопасности Visa и MasterCard
    </Safety>
    <Img src="./static/images/visa.svg" alt="visa" style={{ width: '38px', height: '15px' }} />
    <Img
      src="./static/images/mastercard.svg"
      alt="mastercard"
      style={{ width: '84px', height: '15px' }}
    />
  </Form>
);
