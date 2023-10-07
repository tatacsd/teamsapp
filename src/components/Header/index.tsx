import { useNavigation } from '@react-navigation/native';
import { BackButton, BackIcon, Container, Logo } from './styles';

import logoImg from '@assets/logo.png';

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  const { navigate } = useNavigation();
  const handleBack = () => {
    navigate('groups');
  };
  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleBack}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
