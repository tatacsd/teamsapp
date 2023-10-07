import { Button } from '@components/Button';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { ListEmpty } from '@components/ListEmpty';
import { PlayerCard } from '@components/PlayerCard';
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

export function Players() {
  const [team, setTeam] = useState('Group A');
  const [players, setPlayers] = useState([]);
  const route = useRoute();
  const { group } = route.params as { group: string };

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="Add players and set their teams" />
      <Form>
        <Input placeholder="Player name" autoCorrect={false} />
        <ButtonIcon icon="add" onPress={() => console.log('add player')} />
      </Form>
      <HeaderList>
        <FlatList
          data={['Group A', 'Group B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>{Players.length}</NumberOfPlayers>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard
            name={item}
            onRemove={() => console.log('remove player')}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty title="No players added to this group yet" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />
      <Button
        title="Remove Group"
        type="SECONDARY"
        onPress={() => console.log('remove group')}
      />
    </Container>
  );
}
