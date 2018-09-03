import React from 'react';
import styled from 'styled-components';

import logo from './logo.svg';

const Header = styled.header`
  box-shadow: 0 1px 5px rgba(77, 77, 77, 0.5);
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
  margin-right: 72px;

  font-family: 'GraphikLCG-Medium';
  font-size: 14px;
`;

const Nav = styled.nav`
  position: relative;

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
`;

const Link = styled.a`
  display: inline-block;
  margin-right: 24px;

  font-family: 'GraphikLCG-Medium';
  font-size: 12px;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 70px;
  color: ${props => (props.active ? '#4285F4' : 'inherit')};

  border-bottom: 2px solid ${props => (props.active ? '#4285F4' : 'transparent')};

  :last-child {
    margin-right: 0;
  }
`;

const Btn = styled.a`
  display: inline-block;
  padding: 0 41px;

  font-size: 12px;
  line-height: 40px;
  text-decoration: none;
  color: #9b9b9b;

  border: 1px solid #9b9b9b;
  border-radius: 4px;
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
    </Container>
  </Header>
);
