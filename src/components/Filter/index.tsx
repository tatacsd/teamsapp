import { TouchableOpacityProps } from 'react-native';

import { Container, FilterStyleProps, Title } from './styles';

type FilterProps = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

export function Filter({ title, ...rest }: FilterProps) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
