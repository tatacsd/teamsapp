import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { Container, Form } from './styles';

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Players" subtitle="Add players and set their teams" />
      <Form>
        <Input placeholder="Player name" autoCorrect={false} />
        <ButtonIcon icon="add" onPress={() => console.log('add player')} />
      </Form>
      <Filter title="Group A" isActive />
    </Container>
  );
}
