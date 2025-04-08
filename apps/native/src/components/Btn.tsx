import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

interface ActiveBtnProps {
  theme?: 'light' | 'dark';
  color?: 'green' | 'gray';
  title: string | React.ReactNode;
  onPress?: (...args: any[]) => void;
  titleStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  opacity?: number; // Новий пропс для опасіті (від 0 до 1)
}

const ActiveBtn: React.FC<ActiveBtnProps> = ({
  theme = 'dark',
  color = 'green',
  title,
  onPress,
  titleStyle,
  style,
  opacity = 1, // За замовчуванням опасіті 1 (повністю непрозорий)
}) => {
  const [fontsLoaded, fontsError] = useFonts({
    Poppins_500Medium,
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

  const getBackgroundColor = () => {
    let baseColor;
    if (color === 'green') {
      baseColor = theme === 'dark' ? '#116146' : '#5cb85c';
    } else if (color === 'gray') {
      baseColor = theme === 'dark' ? '#EEEEEE' : '#dddddd';
    } else {
      return color; // Якщо передано не 'green' і не 'gray', використовуємо переданий колір як є
    }

    if (baseColor && opacity !== 1) {
      const hexToRgb = (hex: string): [number, number, number] | null => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16),
        ] : null;
      };

      const rgb = hexToRgb(baseColor);
      if (rgb) {
        return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
      }
    }
    return baseColor;
  };

  const getTextColor = () => {
    let baseColor;
    if (color === 'green') {
      baseColor = theme === 'dark' ? '#FFFFFF' : '#040404';
    } else if (color === 'gray') {
      baseColor = theme === 'dark' ? '#040404' : '#333333';
    } else {
      return '#000000'; // За замовчуванням чорний для нерозпізнаних кольорів
    }

    if (baseColor && opacity !== 1) {
      const hexToRgb = (hex: string): [number, number, number] | null => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16),
        ] : null;
      };

      const rgb = hexToRgb(baseColor);
      if (rgb) {
        // Для тексту просто застосовуємо опасіті до існуючого кольору
        return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
      }
    }
    return baseColor;
  };

  const buttonBackgroundColor = getBackgroundColor();
  const buttonTextColor = getTextColor();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        buttonBackgroundColor && { backgroundColor: buttonBackgroundColor },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.8} // Додано для візуального зворотного зв'язку при натисканні
    >
      {typeof title === 'string' ? (
        <Text style={[styles.title, { color: buttonTextColor }, titleStyle]}>{title}</Text>
      ) : (
        title
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
  },
});

export default ActiveBtn;