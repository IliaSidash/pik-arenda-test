import React from 'react';
import styled from 'styled-components';

import media from '../style-utils';

const Close = styled.div`
  position: absolute;

  top: 16px;
  right: 17px;
  width: 24px;
  height: 24px;

  :after,
  :before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    width: 22px;
    height: 2px;

    background-color: #484848;

    ${media.sm`
      width: 33px;
  `};
  }

  :after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  :before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  ${media.sm`
    top: 33px;
    right: 41px;
  `};
`;

export default () => <Close />;
