import { css } from 'styled-components';

export const flex = () =>
  css`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

export const flexCol = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const glassBkgd = () => css`
  background: var(--transWhite);
  backdrop-filter: blur(4px);
`;
