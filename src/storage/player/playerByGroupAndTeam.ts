import { playerGetByGroup } from './playerGetByGroup';

export const playerByGoupAndTeam = async (group: string, team: string) => {
  try {
    const playersInGroup = await playerGetByGroup(group);

    const playersInTeam = playersInGroup.filter(
      (player) => player.team === team
    );

    return playersInTeam;
  } catch (error) {
    throw error;
  }
};
