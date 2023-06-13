import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Products } from 'Utils/ProductsArrey'
import axios from 'axios'

const initialState: Products[] = []

export const fetchProducts = createAsyncThunk<Products[]>(
    'products/fetchProducts',
    async () => {
        const response = await axios.get(
            'https://run.mocky.io/v3/70135aad-6f6e-4099-879d-b71c0cf9a945'
        )
        return response.data.products
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return (state = action.payload)
        })
    },
})

export default productsSlice.reducer
