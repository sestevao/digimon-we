import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

// import logoImg from '../../assets/logo-nlw-esports.png';
import { styles } from './style';

import { Background } from '../../components/Background';
// import { GameCard, GameCardProps } from '../../ components / GameCard';
// import { Heading } from '../../components/Heading';

export function Home() {
  // const [games, setGames] = useState<GameCardProps[]>([]);
  const navigation = useNavigation();

  /* function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl });
  } */

  /* useEffect(() => {
    fetch('http://192.168.0.23:3333/games')
      .then(response => response.json())
      .then(data => setGames(data));
  }, []); */

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        {/* <Image
          source={logoImg}
          style={styles.logo}
        /> */}

        
      </SafeAreaView>
    </Background>
  );
}