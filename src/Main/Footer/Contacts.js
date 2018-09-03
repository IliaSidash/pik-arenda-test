import React from 'react';
import styled from 'styled-components';

const Contacts = styled.div`
  display: flex;
`;

const Phone = styled.a``;
const Mail = styled.a``;
const Desc = styled.p``;

export default () => (
  <Contacts>
    <Phone>
        8 800 320-30-23
        <Desc>Звонок бесплатный</Desc>
    </Phone>
    <Mail>
        Задать вопрос
        <Desc>Мы всегда на связи</Desc>
    </Mail>
  </Contacts>
);
