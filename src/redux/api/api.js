import { createApi } from "@reduxjs/toolkit/query/react";

const URL = "https://fakestoreapi.com/products";

export const api = createApi({
  baseQuery: () => {},
  endpoints: (builder) => ({
    productList: builder.query({
      async queryFn() {
        const result = await fetch(URL);
        const data = await result.json();
        return { data };
      },
    }),
  }),
});

export const { useProductListQuery } = api;
