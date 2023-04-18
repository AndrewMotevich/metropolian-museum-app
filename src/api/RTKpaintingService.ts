import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { painting } from 'types';

export const paintingApi = createApi({
  reducerPath: 'paintingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://collectionapi.metmuseum.org/public/collection/v1/',
  }),
  endpoints: (builder) => ({
    searchPaintings: builder.query<{ total: number; objectIDs: number[] }, string>({
      query: (qstring) => `search?&hasImages=true&isOnView=true&q=${qstring}`,
    }),
    getPainting: builder.query<painting, number>({
      query: (id) => `objects/${id}`,
    }),
  }),
});

export const { useSearchPaintingsQuery, useGetPaintingQuery } = paintingApi;
