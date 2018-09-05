import React from 'react';
import styled from 'styled-components';

import media from '../../style-utils';

const Contacts = styled.div`
  display: flex;
  max-width: 930px;
  margin: 0 auto;
`;

const ContactsCol = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  padding-top: 34px;
  padding-bottom: 30px;

  &:last-child {
    border-left: 1px solid #d9d9d9;

    ${media.lg`
      padding-left: 63px;
    `};
  }
`;

const Text = styled.div`
  display: none;

  ${media.lg`
    display: block;
  `};
`;

const Phone = styled.a`
  margin-right: 48px;

  font-size: 24px;
  color: #333333;
`;

const Button = styled.a`
  padding: 18px 35px 15px;
  margin: 0 auto;

  font-size: 12px;
  color: #000;
  text-decoration: none;

  border: 1px solid #4a4a4a;
  border-radius: 4px;

  ${media.lg`
    margin: 0;
  `};
`;

const Mail = styled.a`
  display: inline-block;
  margin-right: 23px;
  margin-bottom: 4px;

  font-size: 24px;
`;

const Message = styled.img`
  margin: 0 auto;

  ${media.lg`
    margin: 0;
  `};
`;

const Desc = styled.p`
  margin: 0;

  font-size: 12px;
  color: #7a7a7a;
`;

export default () => (
  <Contacts>
    <ContactsCol>
      <Text>
        <Phone>8 800 320-30-23</Phone>
        <Desc>Звонок бесплатный</Desc>
      </Text>
      <Button href="/">Обратный звонок</Button>
    </ContactsCol>
    <ContactsCol>
      <Text>
        <Mail>Задать вопрос</Mail>
        <Desc>Мы всегда на связи</Desc>
      </Text>
      <Message src="./static/images/message.svg" style={{ width: '54px', height: '32px' }} />
    </ContactsCol>
  </Contacts>
);
