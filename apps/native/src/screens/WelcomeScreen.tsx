import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenProps } from '../navigation/index';
import ActiveBtn from '../components/Btn'
import { useFonts, Poppins_500Medium, Poppins_300Light } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import TrezorIcon from '../../assets/icons/trezor-icon'
SplashScreen.preventAutoHideAsync();


const WelcomeScreen: React.FC<ScreenProps<'Welcome'>> = () => {
  const navigation = useNavigation();
  const [fontsLoaded, fontsError] = useFonts({
    Poppins_500Medium,
    Poppins_300Light
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
  const goToGeneratePhrase = () => {
    navigation.navigate('GeneratePhrase');
  };
  const goToImportPhrase = () => {
    navigation.navigate('ImportPhrase');
  };

  return (
    <View style={styles.container}>

      <View style={styles.textGroup}>
        <TrezorIcon />
        <Text style={styles.title}>
          Trezor Wallet
        </Text>
        <Text style={styles.title2}>
          Take control.
        </Text>
      </View>

      <View style={styles.btnGroup}>
        <ActiveBtn theme='dark' color='green' title="Create a seed phrase wallet" onPress={goToGeneratePhrase} />
        <ActiveBtn theme='dark' color='gray' title="I already have a wallet" onPress={goToImportPhrase} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal:20,
    paddingVertical: 60,
    backgroundColor: '#F6F6F6'
  },
  textGroup:{
    alignItems:'center',
    justifyContent:'center',
    marginBottom: 50
  },
  btnGroup:{
    gap:10
  },
  title: {
    fontSize: 45,
    marginTop: 20,
    fontFamily: 'Poppins_500Medium',
  },
  title2: {
    fontSize: 18,
    fontFamily: 'Poppins_300Light',
  },
});

export default WelcomeScreen;