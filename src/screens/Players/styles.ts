import styles, { DefaultTheme } from 'styled-components/native';

export const Container = styles.View`
    flex: 1;
    padding: 24px;
    background-color: ${({ theme }: { theme: DefaultTheme }) =>
      theme.COLORS.GRAY_600};
    `;
