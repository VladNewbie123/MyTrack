import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
    query: string;
}

const initialState: SearchState = {
    query: '',
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateQuery(state, action: PayloadAction<string>) {
            state.query = action.payload;
        },
        clearQuery(state) {
            state.query = '';
        },
    },
});

export const { updateQuery, clearQuery } = searchSlice.actions;
export default searchSlice.reducer;
