import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';

const store = configureStore({
    reducer: {
        search: searchReducer,
        // Другие reducers, если есть
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;