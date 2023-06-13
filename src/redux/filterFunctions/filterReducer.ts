import { createSlice } from '@reduxjs/toolkit'

type filterType = {
    sortBtnName: string
}

const initialState: filterType = {
    sortBtnName: 'Sugar',
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterByMeat: (state) => {
            state.sortBtnName = 'Meat'
        },
        filterByFish: (state) => {
            state.sortBtnName = 'Fish'
        },
        filterBySugar: (state) => {
            state.sortBtnName = ' Sugar' //пробіл маст хев
        },
    },
})

export const { filterByMeat, filterByFish, filterBySugar } = filterSlice.actions

export default filterSlice.reducer
