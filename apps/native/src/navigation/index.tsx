import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

// Імпортуйте ваші екрани
import WelcomeScreen from '../screens/WelcomeScreen';
import GeneratePhraseScreen from '../screens/CreateWallet/GeneratePhraseScreen';
import ImportPhraseScreen from '../screens/ImportWallet/ImportPhraseScreen';
import GetRecPhrase from '../screens/CreateWallet/GetRecPhrase'
import PutRecPhrase from '../screens/ImportWallet/PutRecPhrase'

// import BiometricsPinScreen from '../screens/BiometricsPinScreen';
// import DashboardScreen from '../screens/DashboardScreen';
// import CoinDetailScreen from '../screens/CoinDetailScreen';
// import SendScreen from '../screens/SendScreen';
// import ReceiveScreen from '../screens/ReceiveScreen';
// import TransactionsScreen from '../screens/TransactionsScreen';
// import SettingsScreen from '../screens/SettingsScreen';

// Визначте типи параметрів для кожного екрану (якщо вони є)
export type RootStackParamList = {
  Welcome: undefined;
  GeneratePhrase: undefined;
  ImportPhrase: undefined;
	GetRecPhrase: undefined;
	PutRecPhrase: undefined;
  // BiometricsPin: undefined;
  // Dashboard: undefined;
  // CoinDetail: { coinId: string }; // Приклад
  // Send: { recipientAddress?: string }; // Приклад
  // Receive: undefined;
  // Transactions: undefined;
  // Settings: undefined;
  // Додайте типи параметрів для інших екранів
};

// Створіть тип для props екранів, які використовують RootStackParamList
export type ScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="GeneratePhrase" component={GeneratePhraseScreen} options={{ title: 'Generate Phrase',headerShown: false }} />
      <Stack.Screen name="ImportPhrase" component={ImportPhraseScreen} options={{ title: 'Import Phrase',headerShown: false }} />
			<Stack.Screen name="GetRecPhrase" component={GetRecPhrase} options={{ title: 'Create wallet',headerShown: false  }} />
			<Stack.Screen name="PutRecPhrase" component={PutRecPhrase} options={{ title: 'Import wallet',headerShown: false  }} />
			
      {/* <Stack.Screen name="BiometricsPin" component={BiometricsPinScreen} options={{ title: 'Biometrics & PIN' }} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} /> */}

      {/* <Stack.Screen name="CoinDetail" component={CoinDetailScreen} options={{ title: 'Coin Details' }} /> */}
      {/* <Stack.Screen name="Send" component={SendScreen} options={{ title: 'Send' }} />
      <Stack.Screen name="Receive" component={ReceiveScreen} options={{ title: 'Receive' }} /> */}

      {/* <Stack.Screen name="Transactions" component={TransactionsScreen} options={{ title: 'Transactions' }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} /> */}
    </Stack.Navigator>
  );
};

export default MainNavigator;