import { configureStore, combineReducers, ThunkAction, Action } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import app from "../features/app";

const reducers = combineReducers({
    app,
});

const persistConfig = {
    key: 'root',
    storage: storage,
};

//@ts-ignore
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    //@ts-ignore
    reducer: typeof window !== "undefined" ? persistedReducer : reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
    devTools: process.env.NODE_ENV === 'development'
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;