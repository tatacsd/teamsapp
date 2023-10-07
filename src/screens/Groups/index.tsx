import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Container } from './styles';

export type RootParamList = {
  groups: undefined;
  players: {
    group: string;
  };
  newGroup: undefined;
};

type GroupsProps = {
  navigation: NativeStackNavigationProp<RootParamList, 'groups'>;
};

export function Groups({ navigation }: GroupsProps) {
  const [groups, setGroups] = useState<string[]>([]);
  const { navigate } = useNavigation();
  const handleNewGroup = () => {
    navigation.navigate('newGroup');
  };
  return (
    <Container>
      <Header />
      <Highlight title="Groups" subtitle="Play with your friends" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 24 }}
        contentContainerStyle={{ flex: 1 }}
        ListEmptyComponent={
          <ListEmpty title="You don't have any groups yet." />
        }
      />
      <Button title="Create Group" onPress={handleNewGroup} />
    </Container>
  );
}
