import React, { Fragment } from 'react';
import styled from 'styled-components';

import media from '../style-utils';

import Header from './Header/';
import Close from '../ui/Close';
import Text from './Text';
import Form from './Form/';
import Footer from './Footer/';

const Main = styled.main`
  position: relative;
  padding-top: 21px;

  ${media.sm`
   padding-top: 56px;
  `};
`;

export default () => (
  <Fragment>
    <Header />
    <Main>
      <Close />
      <Text />
      <Form />
    </Main>
    <Footer />
  </Fragment>
);
