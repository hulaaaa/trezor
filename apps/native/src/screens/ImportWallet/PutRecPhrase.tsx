import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ScreenProps } from '../../navigation/index'; // Імпортуйте ScreenProps

const PutRecPhrase: React.FC<ScreenProps<'GetRecPhrase'>> = () => {
  const navigation = useNavigation();

  const goToWelcome = () => {
    navigation.navigate('GeneratePhrase');

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Import wallet</Text>
      <Button title="Go to Generate" onPress={goToWelcome} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default PutRecPhrase;
