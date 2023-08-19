// NumberContext.js
import React, { createContext, useContext, useReducer } from 'react';

const NumberContext = createContext();

const initialState = {
    chosenNumber: null,
};

const numberReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CHOSEN_NUMBER':
            return { ...state, chosenNumber: action.payload };
        default:
            return state;
    }
};

export const NumberProvider = ({ children }) => {
    const [state, dispatch] = useReducer(numberReducer, initialState);

    return (
        <NumberContext.Provider value={{ state, dispatch }}>
            {children}
        </NumberContext.Provider>
    );
};

export const useNumber = () => {
    return useContext(NumberContext);
};
