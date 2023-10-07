import styles, { DefaultTheme } from 'styled-components/native';

export const Container = styles.View`
    flex: 1;
    padding: 24px;
    background-color: ${({ theme }: { theme: DefaultTheme }) =>
      theme.COLORS.GRAY_600};
    `;

export const Form = styles.View`
    width: 100%;
    background-color: ${({ theme }: { theme: DefaultTheme }) =>
      theme.COLORS.GRAY_700};
      
    flex-direction: row;
    align-items: center;
    border-radius: 6px;
`;
