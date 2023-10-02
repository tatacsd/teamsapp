import { Loading } from '@components/Loading';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { Groups } from '@screens/Groups';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';

export default function App() {
  // Load fonts to all app
  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
