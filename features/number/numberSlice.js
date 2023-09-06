// numberSlice.js
import {createSlice} from '@reduxjs/toolkit';

const numberSlice = createSlice({
    name: 'number',
    initialState: {
        chosenNumber: null,
        enteredValue: '',
    },
    reducers: {
        setChosenNumber: (state, action) => {
            state.chosenNumber = action.payload;
        },
        setEnteredValue: (state, action) => {
            state.enteredValue = action.payload;
        }
    },
});

const {actions, reducer} = numberSlice;
export const {setChosenNumber, setEnteredValue} = actions;
export default reducer;
