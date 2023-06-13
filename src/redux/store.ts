import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsReducer'
import likeReducer from './likeReducer'
import filterReducer from './filterFunctions/filterReducer'

export const store = configureStore({
    reducer: {
        products: productsReducer,
        productsLikeState: likeReducer,
        filter: filterReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
