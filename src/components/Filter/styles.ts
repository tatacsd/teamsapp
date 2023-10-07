import { TouchableOpacity } from 'react-native';
import styles, { css, DefaultTheme } from 'styled-components/native';

export type FilterStyleProps = {
  isActive?: boolean;
};

export const Container = styles(TouchableOpacity)`
    ${({ theme, isActive }: { theme: DefaultTheme } & FilterStyleProps) =>
      isActive &&
      css`
        border: 1px solid ${theme.COLORS.GREEN_700};
      `}

    border-radius: 4px;
    margin-right: 12px;

    height: 38px;
    width: 70px;

    justify-content: center;
    align-items: center;

`;

export const Title = styles.Text`
    ${({ theme }: { theme: DefaultTheme }) =>
      css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.WHITE};
      `}

    text-transform: uppercase;
`;
