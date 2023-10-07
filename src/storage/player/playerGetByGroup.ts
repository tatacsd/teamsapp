import AsyncStorage from '@react-native-async-storage/async-storage';

import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { PlayerStorageDTO } from './PlayerStorageDTO';

export const playerGetByGroup = async (group: string) => {
  try {
    // Get the current players from the group
    const currentPlayers = await AsyncStorage.getItem(
      `${PLAYER_COLLECTION}-${group}`
    );

    const players: PlayerStorageDTO[] = JSON.parse(currentPlayers || '[]');

    return players;
  } catch (error) {
    throw error;
  }
};
