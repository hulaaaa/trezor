import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScreenProps } from '../../navigation/index';
import ActiveBtn from '../../components/Btn';
import { useFonts, Poppins_500Medium, Poppins_300Light } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import GoBackIcon from '../../../assets/icons/goBack-icon';
import CopyIcon from '../../../assets/icons/copyBtn';
import * as Clipboard from 'expo-clipboard';
import CheckIcon from '../../../assets/icons/check-icon'

SplashScreen.preventAutoHideAsync();

const recoveryPhraseText = `sea
exercise
beauty
rotate
exercise
ignore
estate
chair
teacher
street
duck
place`;

const GetRecPhrase: React.FC<ScreenProps<'GetRecPhrase'>> = () => {
  const navigation = useNavigation();
  const [isCopied, setIsCopied] = useState(false);
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
    navigation.navigate('Welcome');
  };

  const handleCopyToClipboard = async () => {
    await Clipboard.setStringAsync(recoveryPhraseText);
    setIsCopied(true)
  };

  return (
    <View style={styles.container}>
      <View style={styles.controlBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <GoBackIcon />
        </TouchableOpacity>

        <View style={styles.stepProgress}>
          <View style={[styles.step, { backgroundColor: '#116146' }]} />
          <View style={[styles.step, { backgroundColor: '#116146' }]} />
          <View style={[styles.step, { backgroundColor: 'rgba(0, 0, 0, 0.1)' }]} />
        </View>
        <TouchableOpacity style={{ opacity: 0 }}>
          <GoBackIcon />
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.textGroup}>
          <Text style={styles.title}>Recovery Phrase</Text>
          <Text style={styles.title2}>
            This is the only way you will be able to recover your account. Please store it
            somewhere safe!
          </Text>
        </View>

        <View style={styles.advantages}>
          <Text style={styles.titleAdv}>
            {recoveryPhraseText.split('\n').join(' ')}
          </Text>

          <TouchableOpacity onPress={handleCopyToClipboard} style={styles.copyBtn}>
            {
              isCopied? (
                <>
                  <CheckIcon />
                  <Text style={styles.clipbaordText}>Copied Successfully</Text>
                </>
              ):(
                <>
                  <CopyIcon />
                  <Text style={styles.clipbaordText}>Copy to clipboard</Text>
                </>
              )
            }
            
          </TouchableOpacity>
        </View>
      </View>

      <ActiveBtn  opacity={isCopied?1:0.5} theme="dark" color="green" title="I saved it" onPress={isCopied?goToGenerate:null} />
    </View>
  );
};

const styles = StyleSheet.create({
  copyBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 60,
    backgroundColor: '#F6F6F6',
  },
  clipbaordText: {
    fontSize: 13,
    fontFamily: 'Poppins_500Medium',
  },
  title: {
    fontSize: 31,
    marginTop: 20,
    fontFamily: 'Poppins_500Medium',
  },
  title2: {
    marginTop: 20,
    fontSize: 15,
    textAlign: 'center',
    width: '90%',
    color: 'rgba(0, 0, 0, 0.5)',
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
    alignItems: 'center',
    gap: 60,
  },
  titleAdv: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Poppins_500Medium',
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
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    width: 150,
  },
  step: {
    flex: 1,
    height: 4,
    borderRadius: 2,
  },
});

export default GetRecPhrase;