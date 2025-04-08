import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Для навігації
import MainNavigator from '../navigation/index';
// import { ThemeProvider } from '../theme'; // Ваш провайдер теми (припустимо)
// import { store } from '../state'; // Ваш Jotai store (або інший менеджер стану)
// import { Provider as JotaiProvider } from 'jotai'; // Якщо використовуєте Jotai

const App = () => {
  return (
    // <ThemeProvider>
    //   <JotaiProvider store={store}>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
    //   </JotaiProvider>
    // </ThemeProvider>
  );
};

export default App;