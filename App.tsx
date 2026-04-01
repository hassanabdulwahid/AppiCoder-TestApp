import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { store, persistor } from './src/store/store'
import RootNavigator from './src/navigation/RootNavigator'
import colors from './src/themes/colors'
import SplashScreen from './src/screens/Auth/SplashScreen'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<SplashScreen />} persistor={persistor}>
        <SafeAreaProvider>
          <StatusBar barStyle="light-content" backgroundColor={colors.background} />
          <AppContent />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  )
}

function AppContent() {
  const insets = useSafeAreaInsets()

  return (
    <View style={[
      styles.container,
      {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }
    ]}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
})

export default App