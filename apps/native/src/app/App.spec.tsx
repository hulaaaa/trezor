
import React from 'react';
import { render } from '@testing-library/react-native';
import App from './App';

test('renders correctly', () => {
  process.env.EXPO_OS = 'ios'; 
  const { getByTestId } = render(<App />);
  expect(getByTestId('heading')).toHaveTextContent('Trezor Wallet');
});
