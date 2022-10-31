import React from 'react';
import { RootNavigator } from './navigators';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux'
import redux from './store'

import 'react-native-gesture-handler';

const src = () => {
  return (
    <Provider store={redux}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <RootNavigator />
      </SafeAreaProvider>
    </Provider>
  )
}

export default src;