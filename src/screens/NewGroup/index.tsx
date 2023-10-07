import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { groupCreate } from '@storage/group/groupCreate';
import { AppError } from '@utils/AppError';
import { useState } from 'react';
import { Alert } from 'react-native';
import { Container, Content, Icon } from './styles';

export function NewGroup() {
  const [group, setGroups] = useState<string>('');
  const { navigate } = useNavigation();

  const handleNewGroup = async () => {
    try {
      if (group.trim().length === 0) {
        Alert.alert('New Group', 'Group name is required.');
        return;
      }

      const regex = /^[a-zA-Z0-9]+$/;
      if (!regex.test(group)) {
        Alert.alert(
          'New Group',
          'Group name can only contain letters and numbers.'
        );
        return;
      }

      if (group.length < 3 || group.length > 20) {
        Alert.alert(
          'New Group',
          'Group name must be between 3 and 20 characters.'
        );
        return;
      }

      await groupCreate(group);
      navigate('players', { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('New Group', error.message);
        return;
      } else {
        Alert.alert('New Group', 'Something went wrong, try again later.');
        console.log(error);
      }
    }
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
