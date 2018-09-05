import React from 'react';
import styled from 'styled-components';

import media from '../../style-utils';

import Contacts from './Contacts';
import Menu from './Menu';

const Footer = styled.footer`
  display: none;

  margin-top: 62px;
  border-top: 1px solid #d9d9d9;

  ${media.sm`
    display: block;
  `};
`;

export default () => (
  <Footer>
    <Contacts />
    <Menu />
  </Footer>
);
