import styles, { DefaultTheme, css } from 'styled-components/native';

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

export const HeaderList = styles.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 32px 0 12px;

`;

export const NumberOfPlayers = styles.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
