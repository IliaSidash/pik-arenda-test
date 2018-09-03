import React from 'react';
import styled from 'styled-components';

import Question from '../ui/Question';

const Text = styled.div`
  text-align: center;
`;

const Heading = styled.h1`
  margin: 0 0 15px;

  font-family: 'GraphikLCG-Medium';
  font-size: 25px;
  line-height: 35px;
`;

const Total = styled.p`
  margin: 0 0 19px;

  font-size: 18px;
  line-height: 25px;
`;

const Price = styled.span`
  color: #4285f4;
`;

const Description = styled.p`
  margin: 0 auto;
  max-width: 375px;

  font-size: 14px;
  line-height: 19px;
`;

const Compensation = Description.extend`
  position: relative;
`;

export default () => (
  <Text>
    <Heading>Подписание договора и оплата</Heading>
    <Total>
      Общая сумма оплаты в адрес ООО «ПИК Аренда»:
      <Price> 1500 руб.</Price>
    </Total>
    <Compensation>
      Размер гарантированной компенсации «ПИК Аренда» при условии соблюдения условий договора:
      <Price> 1000 руб.</Price> <Question />
    </Compensation>
    <Description>
      После оплаты вам необходимо оплатить первый месяц аренды напрямую по реквизитам собственника
    </Description>
  </Text>
);
