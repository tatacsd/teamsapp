import { Button } from '@components/Button';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { ListEmpty } from '@components/ListEmpty';
import { PlayerCard } from '@components/PlayerCard';
import { useRoute } from '@react-navigation/native';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playerGetByGroup } from '@storage/player/playerGetByGroup';
import { AppError } from '@utils/AppError';
import { useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

export function Players() {
  const [team, setTeam] = useState('Group A');
  const [players, setPlayers] = useState([]);
  const route = useRoute();
  const { group } = route.params as { group: string };
  const [newPlayerName, setNewPlayerName] = useState('');

  const handleAddPlayer = async () => {
    try {
      if (newPlayerName.trim().length === 0) {
        throw new AppError('Player name is required');
      }

      const newPlayer = {
        name: newPlayerName,
        team,
      };

      await playerAddByGroup(newPlayer, group);
      const players = await playerGetByGroup(group);
      console.log(players);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('New Player', error.message);
      } else {
        Alert.alert('New Player', 'An error has occurred');
      }
    }
  };

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="Add players and set their teams" />
      <Form>
        <Input
          placeholder="Player name"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
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
