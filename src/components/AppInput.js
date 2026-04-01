import { useState } from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity, Image } from 'react-native'

import AppText from './AppText'
import colors from '../themes/colors'
import { verticalScale, moderateScale } from '../utils/scales'
import Images from '../utils/images'

const AppInput = ({
    title,
    placeholder,
    value,
    onChangeText,
    keyboardType = 'default',
    isPassword = false,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <View style={styles.container}>
            {title && (
                <AppText type="AppSemi16" color={colors.white} style={styles.title}>
                    {title}
                </AppText>
            )}

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor="#6b7280"
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={isPassword && !showPassword}
                    keyboardType={keyboardType}
                    {...props}
                />

                {isPassword && (
                    <TouchableOpacity
                        onPress={() => setShowPassword(prev => !prev)}
                        activeOpacity={0.7}
                        style={styles.eyeButton}
                    >
                        <Image
                            source={showPassword ? Images.passVisible : Images.passHidden}
                            style={styles.eyeIcon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: verticalScale(16),
    },
    title: {
        marginBottom: verticalScale(8),
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1a1a1e',
        borderWidth: 1,
        borderColor: colors.primaryAccent,
        borderRadius: 8,
        paddingHorizontal: moderateScale(12),
        height: verticalScale(50),
    },
    input: {
        flex: 1,
        color: colors.white,
        fontSize: 16,
        fontWeight: '400',
    },
    eyeButton: {
        padding: moderateScale(4),
        marginLeft: moderateScale(8),
    },
    eyeIcon: {
        width: moderateScale(22),
        height: verticalScale(22),
        tintColor: colors.primary,
    },
})

export default AppInput