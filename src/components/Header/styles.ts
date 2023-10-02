import { CaretLeft } from 'phosphor-react-native';
import styled, { DefaultTheme } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 24px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    size: 32,
    color: theme.COLORS.WHITE,
  })
)``;
