import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const paintingApi = createApi({
  reducerPath: 'paintingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://collectionapi.metmuseum.org/public/collection/v1/',
  }),
  endpoints: (builder) => ({
    searchPaintings: builder.query({
      query: (qstring) => `search?&hasImages=true&isOnView=true&q=${qstring}`,
    }),
    getPainting: builder.query({
      query: (id) => `objects/${id}`,
    }),
  }),
});

export const { useSearchPaintingsQuery, useGetPaintingQuery } = paintingApi;
