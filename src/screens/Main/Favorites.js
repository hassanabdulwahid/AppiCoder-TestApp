import { FlatList, View, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import UserCard from '../Main/Home/UserCard'
import AppText from '../../components/AppText'
import colors from '../../themes/colors'

const Favorites = () => {
  const navigation = useNavigation()
  const favorites = useSelector(state => state.favorites.items)

  return (
    <View style={styles.container}>
      {favorites.length === 0
        ? <AppText type="AppRegular16" color={colors.primaryAccent}>No favorites yet.</AppText>
        : <FlatList
            data={favorites}
            renderItem={({ item }) => <UserCard user={item} navigation={navigation} />}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{ paddingBottom: 100 }}
          />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background}
})

export default Favorites