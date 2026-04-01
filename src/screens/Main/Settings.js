import { View, StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'

import { logout } from '../../store/authSlice'
import AppButton from '../../components/AppButton'
import colors from '../../themes/colors'
import { moderateScale } from '../../utils/scales'

const Settings = () => {
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <AppButton
                title="Logout"
                onPress={() => dispatch(logout())}
                backgroundColor={colors.secondary}
                borderColor={colors.secondary}
                textColor={colors.white} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        padding: moderateScale(20)
    },
})

export default Settings