import { Button } from '@components/Button';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { ListEmpty } from '@components/ListEmpty';
import { PlayerCard } from '@components/PlayerCard';
import { useRoute } from '@react-navigation/native';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playerByGoupAndTeam } from '@storage/player/playerByGroupAndTeam';
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';
import { AppError } from '@utils/AppError';
import { useEffect, useRef, useState } from 'react';
import { Alert, FlatList, TextInput } from 'react-native';
import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('');
  const [team, setTeam] = useState('Team A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const { group } = route.params as { group: string };

  const newPlayerNameInputRef = useRef<TextInput>(null);

  const handleAddPlayer = async () => {
    try {
      if (newPlayerName.trim().length === 0) {
        return Alert.alert('New Player', 'Player name is required');
      }

      // check if player already exists
      const playerAlreadyExists = players.find(
        (player) => player.name === newPlayerName
      );

      if (playerAlreadyExists) {
        return Alert.alert('New Player', 'Player already exists');
      }

      const newPlayer = {
        name: newPlayerName,
        team,
      };

      await playerAddByGroup(newPlayer, group);

      setNewPlayerName('');
      newPlayerNameInputRef.current?.blur();
      // Keyboard.dismiss(); // another way to dismiss the keyboard
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('New Player', error.message);
      } else {
        Alert.alert('New Player', 'An error has occurred');
      }
    }
  };

  const fetchPlayersByTeam = async () => {
    try {
      const playersByTeam = await playerByGoupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      Alert.alert('New Player', 'An error has occurred');
    }
  };

  const handlePlayerRemove = async (player: string) => {
    try {
      await playerRemoveByGroup(player, group);
      fetchPlayersByTeam();
    } catch (error) {
      Alert.alert('Remove Player', 'It was not possible to remove the player');
    }
  };

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="Add players and set their teams" />
      <Form>
        <Input
          placeholder="Player name"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          inputRef={newPlayerNameInputRef}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>
      <HeaderList>
        <FlatList
          data={['Team A', 'Team B']}
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
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => handlePlayerRemove(item.name)}
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
