import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  font-size: 12px;
  color: #4a4a4a;

  background-color: #d9d9d9;
`;

const List = styled.ul`
  max-width: 990px;
  margin: 0 auto;
  padding: 24px 30px 13px;
`;

const Item = styled.li`
  display: inline-block;
  margin-right: 30px;
  margin-bottom: 5px;

  :last-child {
    margin-right: 0;
  }
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;

  :hover {
    color: #000000;
  }
`;

export default () => (
  <Menu>
    <List>
      <Item>
        <Link href="/">Проект договора аренды</Link>
      </Item>
      <Item>
        <Link href="/">Подробная информация о компании и оплате</Link>
      </Item>
      <Item>
        <Link href="/">Лицензионный договор</Link>
      </Item>
      <Item>
        <Link href="/">Пользовательское соглашение</Link>
      </Item>
    </List>
  </Menu>
);
