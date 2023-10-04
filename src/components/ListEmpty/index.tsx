import { Container, Title } from './styles';

type ListEmptyProps = {
  title: string;
};

export function ListEmpty({ title }: ListEmptyProps) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}
