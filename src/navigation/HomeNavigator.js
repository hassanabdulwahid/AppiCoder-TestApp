import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, StyleSheet } from 'react-native'

import Home from '../screens/Main/Home/Home'
import Settings from '../screens/Main/Settings'
import DetailScreen from '../screens/Main/Home/DetailScreen'
import Favorites from '../screens/Main/Favorites'
import colors from '../themes/colors'
import Images from '../utils/images'
import { moderateScale, verticalScale } from '../utils/scales'

const Tab = createBottomTabNavigator()

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.primaryAccent,
        tabBarIcon: ({ focused }) => {
          const icons = {
            Home: Images.homeIcon,
            Settings: Images.settingsIcon,
            Favorites: Images.profileIcon,
          }
          return (
            <Image
              source={icons[route.name]}
              style={[
                styles.icon,
                { tintColor: colors.primaryAccent }
              ]}
              resizeMode="contain"
            />
          )
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen
        name="Details"
        component={DetailScreen}
        options={{
          tabBarButton: () => null,
          tabBarItemStyle: { display: 'none' }
        }} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.background,
    borderTopColor: colors.primaryAccent,
    borderTopWidth: 1,
    borderRadius: 15,
    overflow: "hidden",
    position: "absolute",
    height: verticalScale(60),
    paddingVertical: verticalScale(10),
    margin: moderateScale(10)
  },
  icon: {
    width: 22,
    height: 22,
  },
})

export default HomeNavigator