import {combineReducers, configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import userSlice from "@/lib/features/login/slices/userSlice";
import themeSlice from "@/lib/features/login/slices/themeSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import logger from 'redux-logger'

// 1. combine reducers
const rootReducer = combineReducers({
    users: userSlice.reducer,
    theme: themeSlice.reducer
})

// 2. persist config
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['users'], // only persist users
}

// 3. persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const {setUsername, clearUsername} = userSlice.actions;
export const {setTheme} = themeSlice.actions;

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store)

// Infer the type of makeStore
// export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;