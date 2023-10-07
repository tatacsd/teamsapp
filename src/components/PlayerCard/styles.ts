import { MaterialIcons } from '@expo/vector-icons';
import styled, { DefaultTheme, css } from 'styled-components/native';
export const Container = styled.View`
  width: 100%;
  height: 56px;

  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.GRAY_500};

  border-radius: 6px;
  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;
`;

export const PlayerName = styled.Text`
  flex: 1;
  ${({ theme }: { theme: DefaultTheme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_200,
  })
)`
  margin-right: 4px;
  margin-left: 16px;
`;
