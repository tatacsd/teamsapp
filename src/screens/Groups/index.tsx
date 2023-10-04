import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  return (
    <Container>
      <Header />
      <Highlight title="Groups" subtitle="Play with your friends" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 24 }}
        contentContainerStyle={{ flex: 1 }}
        ListEmptyComponent={
          <ListEmpty title="You don't have any groups yet." />
        }
      />
    </Container>
  );
}
