import styled, { DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_200};
`;
