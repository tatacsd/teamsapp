import { Button } from '@components/Button';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { ListEmpty } from '@components/ListEmpty';
import { Loading } from '@components/Loading';
import { PlayerCard } from '@components/PlayerCard';
import { useNavigation, useRoute } from '@react-navigation/native';
import { groupRemoveByName } from '@storage/group/groupRemoveByName';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playerByGoupAndTeam } from '@storage/player/playerByGroupAndTeam';
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';
import { AppError } from '@utils/AppError';
import { useEffect, useRef, useState } from 'react';
import { Alert, FlatList, TextInput } from 'react-native';
import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

export function Players() {
  const [isLoading, setIsLoading] = useState(true);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [team, setTeam] = useState('Team A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const { group } = route.params as { group: string };

  const newPlayerNameInputRef = useRef<TextInput>(null);
  const { navigate } = useNavigation();

  const fetchPlayersByTeam = async () => {
    try {
      const playersByTeam = await playerByGoupAndTeam(group, team);
      setPlayers(playersByTeam);
      setIsLoading(false);
    } catch (error) {
      Alert.alert('New Player', 'An error has occurred');
    }
  };

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

  const handlePlayerRemove = async (player: string) => {
    try {
      await playerRemoveByGroup(player, group);
      fetchPlayersByTeam();
    } catch (error) {
      Alert.alert('Remove Player', 'It was not possible to remove the player');
    }
  };

  const handleRemoveGroupConfirm = async () => {
    try {
      await groupRemoveByName(group);
      Alert.alert('Remove Group', 'Group removed successfully');
      navigate('groups');
    } catch (error) {
      Alert.alert('Remove Group', 'It was not possible to remove the group');
    }
  };

  const handleRemoveGroup = async () => {
    try {
      Alert.alert(
        'Remove Group',
        'Are you sure you want to remove this group?',
        [
          {
            text: 'No',
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: handleRemoveGroupConfirm,
          },
        ]
      );
    } catch (error) {
      Alert.alert('Remove Group', 'It was not possible to remove the group');
    }
  };

  useEffect(() => {
    setIsLoading(true);
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

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
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
            onPress={handleRemoveGroup}
          />
        </>
      )}
    </Container>
  );
}
