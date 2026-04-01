import { StyleSheet, View } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import AppText from '../../components/AppText'
import { moderateScale, verticalScale } from '../../utils/scales'
import colors from '../../themes/colors'
import AppInput from '../../components/AppInput'
import AppButton from '../../components/AppButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller'
import { loginThunk } from '../../store/authSlice'

const Login = () => {
    const dispatch = useDispatch()
    const { loading, error } = useSelector((state) => state.auth)

    const { control, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        // console.log("first")
        dispatch(loginThunk(data))
    }

    return (
        <KeyboardAwareScrollView style={styles.container}>
            <View style={styles.header}>
                <AppText type='AppSemi24' color={colors.secondary}>Welcome to AppiCoders</AppText>
                <AppText type='AppRegular16' color={colors.primaryAccent} alignSelf="center" marginVertical={verticalScale(10)}>
                    Please fill in the data below to login
                </AppText>
            </View>

            <View style={styles.formContainer}>
                <Controller
                    control={control}
                    name="email"
                    rules={{
                        required: '* Email is required',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Enter a valid email',
                        },
                    }}
                    render={({ field: { onChange, value } }) => (
                        <AppInput
                            title="Email"
                            placeholder="abc@example.com"
                            value={value}
                            onChangeText={onChange}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    )}
                />
                {errors.email && <AppText type='AppRegular14' color={colors.secondary}>{errors.email.message}</AppText>}

                <Controller
                    control={control}
                    name="password"
                    rules={{
                        required: '* Password is required',
                        minLength: {
                            value: 8,
                            message: 'Password must be at least 8 characters',
                        },
                    }}
                    render={({ field: { onChange, value } }) => (
                        <AppInput
                            title="Password"
                            placeholder="Your password"
                            isPassword
                            value={value}
                            onChangeText={onChange}
                        />
                    )}
                />
                {errors.password && <AppText type='AppRegular14' color={colors.secondary}>{errors.password.message}</AppText>}

                {error && <AppText type='AppRegular14' color={colors.secondary}>{error}</AppText>}
            </View>

            <AppButton title="LOGIN" onPress={handleSubmit(onSubmit)} disabled={loading} />
        </KeyboardAwareScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: moderateScale(16),
    },
    header: {
        marginVertical: verticalScale(10),
    },
    formContainer: {
        marginVertical: verticalScale(10),
    },
})