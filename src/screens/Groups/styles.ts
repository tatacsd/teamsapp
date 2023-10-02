import styled, { DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.GRAY_600};
`;
