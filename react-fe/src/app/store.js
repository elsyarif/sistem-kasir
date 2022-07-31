import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer} from 'redux-persist'

const persistConfig = {
    key: 'main',
    version: 1,
    storage,
    // whitelist: ['auth']
    blacklist: ['auth']
  }

const rootReducer = combineReducers()

const persistedReducer = persistReducer(persistConfig, )
export const store = configureStore({})

export let persistor = persistStore(store)