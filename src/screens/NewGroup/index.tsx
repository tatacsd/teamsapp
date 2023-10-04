import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { Container, Content, Icon } from './styles';

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight title="New Group" subtitle="Create a new group" />
        <Input placeholder="Group Name" />
        <Button title="Create Group" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}
