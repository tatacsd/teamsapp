import { TextInput } from 'react-native';
import styled, { DefaultTheme, css } from 'styled-components/native';

export const Container = styled(TextInput)`
  ${({ theme }: { theme: DefaultTheme }) => css`
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    border-radius: 6px;
    padding: 6px;
    min-height: 56px;
    max-height: 56px;
  `}
`;
