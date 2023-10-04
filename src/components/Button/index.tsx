import { TouchableOpacityProps } from 'react-native';
import { ButtonTypeStyleProps, Container, Title } from './styles';

type ButtonTypeProps = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

export function Button({ title, type = 'PRIMARY', ...rest }: ButtonTypeProps) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
