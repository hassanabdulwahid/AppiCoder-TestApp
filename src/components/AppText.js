import React from 'react';
import { Text, StyleSheet } from 'react-native';

import typography from '../themes/typography';

const AppText = ({
  children,
  type = 'AppRegular16',
  color,
  style,
  ...props
}) => {
  const textStyle = StyleSheet.flatten([
    typography[type] || typography.AppRegular16,
    color && { color },
    style,
  ]);

  return (
    <Text style={textStyle} {...props}>
      {children}
    </Text>
  );
};

export default AppText;