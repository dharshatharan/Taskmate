import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import App from './App';
import {persistor, store} from './store';
import NavigationService, {navigationRef} from 'services/navigation/NavigationService';
import './i18n';
import {enableScreens} from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';

/**
 * Optimize memory usage and performance: https://reactnavigation.org/docs/react-native-screens/
 */
enableScreens();

export default function Root() {
  useEffect(() => {
    NavigationService.isReady = false;
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={<View />} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer
            ref={navigationRef}
            onReady={() => {
              NavigationService.isReady = true;
            }}>
            <App />
            <StatusBar style="auto" />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}