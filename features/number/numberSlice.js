// numberSlice.js
import {createSlice} from '@reduxjs/toolkit';

const numberSlice = createSlice({
    name: 'number',
    initialState: {
        chosenNumber: null,
    },
    reducers: {
        setChosenNumber: (state, action) => {
            state.chosenNumber = action.payload;
        },
    },
});

const {actions, reducer} = numberSlice;
export const {setChosenNumber} = actions;
export default reducer;
