import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import AppText from './AppText'
import colors from '../themes/colors'
import { moderateScale, verticalScale } from '../utils/scales'

const AppButton = ({
    title,
    onPress,
    backgroundColor = 'transparent',
    borderColor = colors.secondary,
    textColor = colors.primaryAccent,
    textType = 'AppBold16',
    disabled = false,
    style,
    ...props
}) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={[
                    styles.button,
                    {
                        backgroundColor: disabled ? '#4a4a4a' : backgroundColor,
                        borderColor: borderColor,
                        borderWidth: borderColor ? 1 : 0,
                    },
                    style,
                ]}
                onPress={onPress}
                disabled={disabled}
                activeOpacity={0.7}
                {...props}
            >
                <AppText
                    type={textType}
                    color={disabled ? '#888888' : textColor}
                >
                    {title}
                </AppText>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: verticalScale(14),
        paddingHorizontal: moderateScale(20),
        borderRadius: 20,
        minHeight: verticalScale(50),
    },
})

export default AppButton