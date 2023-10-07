import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

export function Players() {
  const [team, setTeam] = useState('Group A');
  const [Players, setPlayers] = useState([]);
  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Players" subtitle="Add players and set their teams" />
      <Form>
        <Input placeholder="Player name" autoCorrect={false} />
        <ButtonIcon icon="add" onPress={() => console.log('add player')} />
      </Form>
      <HeaderList>
        <FlatList
          data={['Group A', 'Group B']}
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
    </Container>
  );
}
