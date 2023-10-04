import { TouchableOpacity } from 'react-native';
import styled, { DefaultTheme } from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type ButtonProps = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<ButtonProps>`
  min-height: 56px;
  max-height: 56px;

  background-color: ${({
    theme,
    type,
  }: { theme: DefaultTheme } & ButtonProps) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.FONT_FAMILY.BOLD};
`;
