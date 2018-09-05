import React from 'react';
import styled from 'styled-components';

import media from '../style-utils';
import Question from '../ui/Question';

const Text = styled.div`
  padding: 0 30px;
  font-family: 'GraphikLCG-Medium';

  ${media.sm`
    font-family: 'GraphikLCG-Regular';
    text-align: center;
  `};
`;

const Heading = styled.h1`
  margin: 0px 0 17px;

  font-size: 20px;
  line-height: 25px;

  ${media.sm`
    margin: 6px 0 25px;
    
    font-family: 'GraphikLCG-Medium'; 
    font-size: 25px;
    line-height: 35px;
  `};
`;

const Total = styled.p`
  margin: 0 0 10px;

  font-size: 15px;
  line-height: 20px;

  ${media.sm`
    margin: 0 0 26px;
    font-size: 18px;
    line-height: 25px;
  `};
`;

const Price = styled.span`
  position: relative;
  color: #4285f4;
`;

const Description = styled.p`
  max-width: 435px;
  margin: 0 0 17px;

  font-size: 15px;
  line-height: 20px;

  ${media.sm`
    margin: 0 auto 28px;
    font-size: 14px;
    line-height: 19px;
  `};
`;

const Compensation = styled(Description)`
  position: relative;
  max-width: 375px;
  margin-bottom: 10px;

  ${media.sm`
    margin-bottom: 15px;
  `};
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
      <Price>
        1000 руб.
        <Question text="Размер гарантии определяется в процентном отношении к лицензионному вознаграждению" />
      </Price>
    </Compensation>
    <Description>
      После оплаты вам необходимо оплатить первый месяц аренды напрямую по реквизитам собственника
    </Description>
  </Text>
);
