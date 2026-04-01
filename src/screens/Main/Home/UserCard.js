import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import AppText from '../../../components/AppText';
import colors from '../../../themes/colors';
import { verticalScale, moderateScale } from '../../../utils/scales';
import Images from '../../../utils/images';
import { toggleFavorite } from '../../../store/favoritesSlice';

const UserCard = ({ user, navigation }) => {
    const dispatch = useDispatch()
    const isFav = useSelector(state => state.favorites.items.some(u => u.id === user.id))

    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Details', { user })}>
            <View style={styles.header}>
                <Image source={Images.avatar} style={styles.avatar} />
                <View style={{ flex: 1 }}>
                    <AppText type="AppSemi20" color={colors.white}>{user?.name}</AppText>
                    <AppText type="AppRegular14" color={colors.primaryAccent}>{user?.company?.name}</AppText>
                </View>
                <TouchableOpacity onPress={() => dispatch(toggleFavorite(user))}>
                    <AppText type="AppBold18" color={isFav ? colors.secondary : colors.white}>
                        {isFav ? '♥' : '♡'}
                    </AppText>
                    {/* googled the mojis for it didnt use images */}
                </TouchableOpacity>
            </View>

            <View style={styles.divider} />

            <AppText type="AppRegular14" color={colors.white}>{user?.email}</AppText>
            <AppText type="AppRegular14" color={colors.white}>{user?.phone}</AppText>
            {user?.website && (
                <AppText type="AppRegular14" color={colors.secondary}>{user.website}</AppText>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.background,
        borderRadius: 12,
        padding: moderateScale(16),
        marginVertical: verticalScale(8),
        marginHorizontal: moderateScale(16),
        borderRightWidth: 3,
        borderRightColor: colors.primaryAccent,
    },
    divider: {
        height: 1,
        backgroundColor: colors.white,
        marginVertical: verticalScale(10),
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(10)
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 10
    }
});

export default UserCard;