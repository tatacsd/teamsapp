import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { playerGetByGroup } from './playerGetByGroup';

export const playerRemoveByGroup = async (
  playerName: string,
  group: string
) => {
  try {
    const currentPlayers = await playerGetByGroup(group);

    //remove player
    const newPlayers = currentPlayers.filter(
      (player) => player.name !== playerName
    );

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${group}`,
      JSON.stringify(newPlayers)
    );
  } catch (error) {
    throw error;
  }
};
