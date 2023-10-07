import AsyncStorage from '@react-native-async-storage/async-storage';

import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { PlayerStorageDTO } from './PlayerStorageDTO';
import { playerGetByGroup } from './playerGetByGroup';

export const playerAddByGroup = async (
  newPlayer: PlayerStorageDTO,
  group: string
) => {
  try {
    const currentPlayers = await playerGetByGroup(group);

    // check if the player already exists
    const playerExists = currentPlayers.filter(
      (player) => player.name === newPlayer.name
    );

    if (playerExists.length) {
      throw new Error('Player already exists');
    }

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${group}`,
      JSON.stringify([...currentPlayers, newPlayer])
    );
  } catch (error) {
    throw error;
  }
};
