import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container } from './styles';
export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Groups" subtitle="Play with your friends" />
      <GroupCard title="Group 1" />
    </Container>
  );
}
