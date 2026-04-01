import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers } from 'redux'

import authReducer from './authSlice'
import favoritesReducer from './favoritesSlice'

const persistConfig = { key: 'root', storage: AsyncStorage }

const rootReducer = combineReducers({
  auth: authReducer,
  favorites: favoritesReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefault) => getDefault({ serializableCheck: false }),
})

export const persistor = persistStore(store)