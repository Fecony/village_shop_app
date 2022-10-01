import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export type ProductResponse = Product[];

interface PurchaseProductResponse {
  success: boolean;
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_ENDPOINT }),
  endpoints: (build) => ({
    getProducts: build.query<ProductResponse, number>({
      query: (age) => `products?age=${age}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Products' as const, id })),
              { type: 'Products', id: 'LIST' },
            ]
          : [{ type: 'Products', id: 'LIST' }],
    }),
    createProduct: build.mutation<Product, FormData>({
      query: (body) => ({
        url: 'products',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Products', id: 'LIST' }],
    }),
    deleteProduct: build.mutation<null, number>({
      query: (productId) => ({
        url: `products/${productId}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Products', id: 'LIST' }],
    }),
    purchaseProduct: build.mutation<PurchaseProductResponse, number>({
      query: (productId) => ({
        url: `products/${productId}/purchase`,
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'Products', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  usePurchaseProductMutation,
} = productsApi;
