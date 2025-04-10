import {
  Poppins_300Light,
  Poppins_500Medium,
  useFonts,
} from '@expo-google-fonts/poppins';
import { useNavigation } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GoBackIcon from '../../assets/icons/goBack-icon';
import GuardIcon from '../../assets/icons/guard-icon';
import RecycleIcon from '../../assets/icons/recycle-icon';
import TrezorIcon from '../../assets/icons/trezor-icon';
import ActiveBtn from '../../components/Btn';
import { RootStackParamList, ScreenProps } from '../../navigation/index'; // Імпортуйте ScreenProps
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

SplashScreen.preventAutoHideAsync();

const ImportPhraseScreen: React.FC<ScreenProps<'ImportPhrase'>> = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  const [fontsLoaded, fontsError] = useFonts({
    Poppins_500Medium,
    Poppins_300Light,
  });

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded || fontsError) {
        await SplashScreen.hideAsync();
      }
    }
    hideSplashScreen();
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded) {
    return null;
  }
  const goToGenerate = () => {
    navigation.navigate('GetRecPhrase');
  };

  return (
    <View style={styles.container}>
      <View style={styles.controlBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <GoBackIcon />
        </TouchableOpacity>

        <View style={styles.stepProgress}>
          <View style={[styles.step, { backgroundColor: '#116146' }]} />
          <View
            style={[styles.step, { backgroundColor: 'rgba(0, 0, 0, 0.1)' }]}
          />
          <View
            style={[styles.step, { backgroundColor: 'rgba(0, 0, 0, 0.1)' }]}
          />
        </View>
        <TouchableOpacity style={{ opacity: 0 }}>
          <GoBackIcon />
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.textGroup}>
          <TrezorIcon />
          <Text style={styles.title}>Add a Trezor Wallet</Text>
          <Text style={styles.title2}>Import an existing wallet</Text>
        </View>

        <View style={styles.advantages}>
          <View style={styles.advantage}>
            <RecycleIcon />
            <View style={{ gap: 5 }}>
              <Text style={styles.titleAdv}>Easy recovery</Text>
              <Text style={styles.titleAdv2}>
                Recover access to your crypto with your 4-digit PIN
              </Text>
            </View>
          </View>
          <View style={styles.advantage}>
            <GuardIcon />
            <View style={{ gap: 5 }}>
              <Text style={styles.titleAdv}>Protected assets</Text>
              <Text style={styles.titleAdv2}>
                Your keys and funds stay solely on your device
              </Text>
            </View>
          </View>
        </View>
      </View>

      <ActiveBtn
        theme="dark"
        color="green"
        title="Import by Recovery Phrase"
        onPress={goToGenerate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 60,
    backgroundColor: '#F6F6F6',
  },
  title: {
    fontSize: 31,
    marginTop: 20,
    fontFamily: 'Poppins_500Medium',
  },
  title2: {
    marginTop: 20,
    fontSize: 18,
    fontFamily: 'Poppins_300Light',
  },
  textGroup: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  advantages: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
  },
  advantage: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  titleAdv: {
    fontSize: 20,
    fontFamily: 'Poppins_500Medium',
  },
  titleAdv2: {
    width: '99%',
    fontSize: 13,
    fontFamily: 'Poppins_300Light',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  controlBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stepProgress: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', // Вирівнює кроки по вертикалі по центру
    justifyContent: 'center', // Центрує кроки горизонтально
    gap: 7,
    width: 150,
  },
  step: {
    flex: 1,
    height: 4,
    borderRadius: 2,
  },
});

export default ImportPhraseScreen;
