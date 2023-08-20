import number from "./../features/number/numberSlice";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        number,
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;
