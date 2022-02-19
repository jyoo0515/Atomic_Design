import media from './media';

const colors = {
  white: '#ffffff',
  black: '#232323',
  blue: '#003875',
  gray_1: '#707070',
  gray_2: '#9cafb8',
};
// how to use : ${({ theme }) => theme.colors.white};

export const theme = {
  colors,
  media,
};

export type Theme = typeof theme;

// https://flamingotiger.github.io/style/styled-components-typescript/
