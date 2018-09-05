import { css } from 'styled-components';

const media = {
  sm: (...args) => css`
    @media (min-width: 576px) {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)};
    }
  `,
  lg: (...args) => css`
    @media (min-width: 992px) {
      ${css(...args)};
    }
  `,
};

export default media;
