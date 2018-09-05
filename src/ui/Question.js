import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import media from '../style-utils';

const Tooltip = styled.span`
  position: absolute;
  top: calc(100% + 14px);
  left: 50%;
  transform: translate(-50%, 20px);
  transition: visibility 0s 0.5s, opacity 0.2s ease, transform 0.5s ease;

  padding: 16px 18px 14px;
  min-width: 142px;
  max-width: 272px;

  color: #ffffff;
  font-size: 14px;
  text-align: left;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;

  background-color: #000000;
  border-radius: 8px;

  opacity: 0;
  visibility: hidden;

  :after {
    content: '';
    position: absolute;
    left: 50%;
    top: -13px;
    transform: translateX(-50%) rotate(90deg);

    width: 0;
    height: 0;
    border-style: solid;
    border-width: 9px 9px 9px 0;
    border-color: transparent #000000 transparent transparent;

    ${media.lg`
      top: 50%;
      left: -9px;
      transform: translateY(-50%);
    `};
  }

  ${media.lg`
    top: 50%;
    left: calc(100% + 14px);
    transform: translate(20px, -50%);
  `};
`;

const Question = styled.span`
  position: absolute;
  right: -31px;
  top: 50%;
  transform: translateY(-50%);

  width: 22px;
  height: 22px;

  color: #4d4d4d;
  font-size: 12px;
  text-align: center;
  line-height: 22px;

  border-radius: 50%;
  background-color: #d9d9d9;

  cursor: help;
  z-index: 100;

  ${media.sm`
    right: -35px;
  `};

  :hover {
    background-color: #4d4d4d;
    color: #ffffff;

    ${Tooltip} {
      transform: translate(-50%, 0);
      transition: opacity 0.2s, transform 0.5s;
      opacity: 1;
      visibility: visible;

      ${media.lg`
        transform: translate(0, -50%);
      `};
    }
  }
`;

const QuestionComponent = ({ text }) => (
  <Question>
    ?<Tooltip>{text}</Tooltip>
  </Question>
);

QuestionComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default QuestionComponent;
