import { createStore, applyMiddleware, combineReducers } from 'redux'
import { thunk } from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import authReducer from './authSlice'
import favoritesReducer from './favoritesSlice'

const persistConfig = { key: 'root', storage: AsyncStorage }

const rootReducer = combineReducers({
  auth: authReducer,
  favorites: favoritesReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)