import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        isLoading: false,
        isError: false
    },
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        setErrorMessage(state, action) {
            state.isError = action.payload.isError;
        }
    }
});

export const { setLoading, setErrorMessage } = ProductSlice.actions;

export default ProductSlice.reducer;