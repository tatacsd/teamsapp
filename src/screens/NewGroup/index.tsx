import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { Container, Content, Icon } from './styles';

export function NewGroup() {
  const { navigate } = useNavigation();
  const handleNewGroup = () => {
    navigate('players', { group: 'newGroup' });
  };
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight title="New Group" subtitle="Create a new group" />
        <Input placeholder="Group Name" />
        <Button
          title="Create Group"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  );
}
