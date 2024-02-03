import { Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// import { GameParams } from '../../@types/navigation';

// import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { Background } from '../../components/Background';
// import { DuoMatch } from '../../components/DuoMatch';
// import { Heading } from '../../components/Heading';

// import logoImg from '../../assets/logo-nlw-esports.png';
import { THEME } from '../../theme';
import { styles } from './style';

export function Game() {
  const route = useRoute();
  // const game = route.params as GameParams;
  const navigation = useNavigation();

  // const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState('');

  function handleGoBack() {
    navigation.goBack();
  }

  /* async function getDiscordUser(adsId: string) {
    fetch(`http://192.168.0.23:3333/ads/${adsId}/discord`)
      .then(response => response.json())
      .then(data => setDiscordDuoSelected(data.discord));
  }

  useEffect(() => {
    fetch(`http://192.168.0.23:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data));
  }, []); */

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={handleGoBack}
          >
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          {/* <Image
            source={logoImg}
            style={styles.logo}
          /> */}

          <View style={styles.right} />
        </View>

        
      </SafeAreaView>
    </Background>
  );
}