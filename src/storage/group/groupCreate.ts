import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';
import { groupGetAll } from './groupsGetAll';

export async function groupCreate(newGroupName: string) {
  try {
    const storedGroups = await groupGetAll();

    // Check if group already exists
    if (storedGroups.includes(newGroupName)) {
      throw new AppError('Group already exists');
    }

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...storedGroups, newGroupName])
    );
  } catch (error) {
    throw error;
  }
}
