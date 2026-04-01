import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

import { moderateScale, verticalScale } from '../utils/scales';
import colors from '../themes/colors';

const SkeletonCard = () => {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 1, duration: 800, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 0.3, duration: 800, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View style={[styles.card, { opacity }]}>
      <View style={[styles.line, { width: '50%' }]} />
      <View style={[styles.line, { width: '30%', marginTop: 6 }]} />
      <View style={styles.divider} />
      <View style={[styles.line, { width: '70%' }]} />
      <View style={[styles.line, { width: '60%', marginTop: 6 }]} />
      <View style={[styles.line, { width: '40%', marginTop: 6 }]} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: moderateScale(16),
    marginVertical: verticalScale(8),
    marginHorizontal: moderateScale(16),
    borderRightWidth: 3,
    borderRightColor: colors.primaryAccent,
  },
  line: {
    height: 14,
    backgroundColor: '#333',
    borderRadius: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#2E2E2E',
    marginVertical: verticalScale(10),
  },
});

export default SkeletonCard;