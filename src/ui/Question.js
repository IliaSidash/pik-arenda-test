import React from 'react';
import styled from 'styled-components';

const Question = styled.span`
  position: absolute;
  right: -35px;
  top: 50%;
  transform: translateY(-50%);

  width: 22px;
  height: 22px;

  font-size: 12px;
  text-align: center;
  line-height: 22px;

  border-radius: 50%;
  background-color: #d9d9d9;
`;

export default () => <Question>?</Question>;
