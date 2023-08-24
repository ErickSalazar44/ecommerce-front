import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
    name: "Products",
    initialState: null,
    reducers: {
        setProductsG: (state, actions) => actions.payload,
    },
});

export const { setProductsG } = productsSlice.actions;

export default productsSlice.reducer;

//TODO
// const defaultUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'

const defaultUrl = `${import.meta.env.VITE_API_URL}/products`;

export const getProductsThunk =
    (url = defaultUrl) =>
    (dispatch) => {
        axios
            .get(url)
            .then((res) => dispatch(setProductsG(res.data)))
            .catch((err) => console.log(err));
    };
