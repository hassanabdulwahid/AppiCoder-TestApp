import React from 'react'
import { useSelector } from 'react-redux'

import AuthNavigator from './AuthNavigator'
import HomeNavigator from './HomeNavigator'

const RootNavigator = () => {
    const token = useSelector((state) => state.auth.token)

    return token ? <HomeNavigator /> : <AuthNavigator />
}

export default RootNavigator