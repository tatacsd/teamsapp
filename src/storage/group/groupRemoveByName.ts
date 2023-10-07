import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig';
import { groupGetAll } from './groupsGetAll';

export const groupRemoveByName = async (groupDeleted: string) => {
  try {
    const storageGroups = await groupGetAll();

    // remove group
    const groups = storageGroups.filter((group) => group !== groupDeleted);
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));

    // remove players from group
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);
  } catch (error) {
    throw error;
  }
};
