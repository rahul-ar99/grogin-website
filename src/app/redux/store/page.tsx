
import { configureStore } from "@reduxjs/toolkit";
import FavoriteReducer from '../favorite/page'

export const Store = configureStore({
    reducer:{
        favorite:FavoriteReducer    }
})


export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;