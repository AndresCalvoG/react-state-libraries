import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products";
import { api } from "./api/api";

export default configureStore({
  reducer: { products, [api.reducerPath]: api.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
