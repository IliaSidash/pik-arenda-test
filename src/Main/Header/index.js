import React from 'react';
import styled from 'styled-components';

import media from '../../style-utils';
import logo from './logo.svg';

const Header = styled.header`
  padding: 14px 0 15px;
  background-color: #fffefe;
  border-bottom: solid 1px #d9d9d9;

  ${media.lg`
    padding: 0;
    box-shadow: 0 1px 5px rgba(77, 77, 77, 0.5);
    border-bottom: none;
    background-color:#ffffff;
  `};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

const Logo = styled.img`
  margin-right: 63px;
`;

const User = styled.div`
  display: none;
  margin-right: 65px;

  font-family: 'GraphikLCG-Medium';
  font-size: 14px;

  ${media.lg`
    display: block;
  `};
`;

const Nav = styled.nav`
  position: relative;

  display: none;
  flex-grow: 1;
  padding-left: 60px;

  :after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    width: 1px;
    height: 35px;

    background-color: #000;
  }

  ${media.lg`
    display: block;
  `};
`;

const Link = styled.a`
  display: inline-block;
  margin-right: 31px;

  font-family: 'GraphikLCG-Medium';
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  line-height: 68px;
  color: ${props => (props.active ? '#4285F4' : 'inherit')};

  border-bottom: 2px solid ${props => (props.active ? '#4285F4' : 'transparent')};

  :last-child {
    margin-right: 0;
  }
`;

const Btn = styled.a`
  display: none;
  padding: 0 25px;

  font-size: 12px;
  line-height: 38px;
  text-decoration: none;
  color: #9b9b9b;

  border: 1px solid #9b9b9b;
  border-radius: 4px;

  ${media.lg`
    display: block;
  `};
`;

const Burger = styled.div`
  position: relative;

  width: 25px;
  height: 14px;
  margin-left: auto;

  :after,
  :before {
    content: '';
    position: absolute;
    left: 0;

    width: 100%;
    height: 4px;

    background-color: #4d4d4d;
  }

  :after {
    top: 0;
  }
  :before {
    bottom: 0;
  }

  ${media.lg`
    display: none;
  `};
`;

export default () => (
  <Header>
    <Container>
      <Logo style={{ width: '42px', height: '42px' }} src={logo} alt="PIK-arenda" />
      <User>Комаров Н. К.</User>
      <Nav>
        <Link href="/">Сдать квартиру</Link>
        <Link active href="/">
          Снять квартиру
        </Link>
      </Nav>
      <Btn href="/">Выйти</Btn>
      <Burger />
    </Container>
  </Header>
);
