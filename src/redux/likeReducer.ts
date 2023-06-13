import { createSlice } from '@reduxjs/toolkit'
import { omit } from 'lodash'

type likeProductsType = {
    [id: number]: boolean
}

export const initialState: likeProductsType = {}

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        addLike: (state, action) => ({
            ...state,
            [action.payload]: true,
        }),

        removeLike: (state, action) => omit(state, action.payload),
    },
})

export const { addLike, removeLike } = likeSlice.actions
export default likeSlice.reducer
