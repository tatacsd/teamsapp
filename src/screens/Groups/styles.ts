import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { DefaultTheme } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.GRAY_600};
`;
