import { useEffect, useRef } from 'react'
import { View, Animated, StyleSheet } from 'react-native'

import colors from '../../themes/colors'
import AppText from '../../components/AppText'

const SplashScreen = () => {
  const opacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(opacity, { toValue: 1, duration: 800, useNativeDriver: true }).start()
  }, [])

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity }}>
        <AppText type="AppBold32" color={colors.primaryAccent}>Test App for Appicoders</AppText>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, justifyContent: 'center', alignItems: 'center' }
})

export default SplashScreen