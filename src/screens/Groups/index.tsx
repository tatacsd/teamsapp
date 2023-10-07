import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { groupGetAll } from '@storage/group/groupsGetAll';
import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const { navigate } = useNavigation();

  const fetchGroups = async () => {
    try {
      const data = await groupGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewGroup = () => {
    navigate('newGroup');
  };

  const handleOpenGroup = (group: string) => {
    navigate('players', { group });
  };

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  // useEffect(() => {
  //   fetchGroups();
  // }, [groups]);

  return (
    <Container>
      <Header />
      <Highlight title="Groups" subtitle="Play with your friends" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
        )}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 24 }}
        contentContainerStyle={{ flex: 1 }}
        ListEmptyComponent={
          <ListEmpty title="You don't have any groups yet." />
        }
      />
      <Button title="Create Group" onPress={() => handleNewGroup()} />
    </Container>
  );
}
