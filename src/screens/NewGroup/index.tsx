import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Container, Content, Icon } from './styles';

export function NewGroup() {
  const [group, setGroups] = useState<string>('');
  const { navigate } = useNavigation();
  const handleNewGroup = () => {
    navigate('players', { group });
  };
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight title="New Group" subtitle="Create a new group" />
        <Input placeholder="Group Name" onChangeText={setGroups} />
        <Button
          title="Create Group"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  );
}
