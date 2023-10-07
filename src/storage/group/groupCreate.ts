import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '@storage/storageConfig';
import { groupGetAll } from './groupsGetAll';

export async function groupCreate(newGroupName: string) {
  try {
    const storedGroups = await groupGetAll();
    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...storedGroups, newGroupName])
    );
  } catch (error) {
    throw error;
  }
}
