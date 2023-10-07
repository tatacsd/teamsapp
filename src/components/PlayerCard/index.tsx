import { ButtonIcon } from '@components/ButtonIcon';
import { Container, Icon, PlayerName } from './styles';

export type PlayerCardProps = {
  name: string;
  onRemove: () => void;
};

export const PlayerCard = ({ name, onRemove }: PlayerCardProps) => {
  return (
    <Container>
      <Icon name="person" />
      <PlayerName>{name}</PlayerName>
      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </Container>
  );
};
