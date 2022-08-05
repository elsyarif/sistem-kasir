import { configureStore  } from "@reduxjs/toolkit";
// import { persistStore, persistReducer} from 'redux-persist'
import authReducer from '../features/auth/authSlice'

// const persistConfig = {
//     key: 'main',
//     version: 1,
//     storage,
//     // whitelist: ['auth']
//     blacklist: ['auth']
//   }

// const rootReducer = combineReducers({ auth: authReducer })

// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: {
    auth: authReducer,
  }
})

// export let persistor = persistStore(store)