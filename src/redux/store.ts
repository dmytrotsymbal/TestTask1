import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsReducer'
import likeReducer from './likeReducer'

export const store = configureStore({
    reducer: {
        products: productsReducer,
        productsLikeState: likeReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
