import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "x-rapidapi-host": process.env.REACT_APP_API_HOST,
  "x-rapidapi-key": process.env.REACT_APP_API_KEY,
};

const baseUrl = process.env.REACT_APP_BASE_URL;

const createRequest = (url) => ({ url, headers: headers });
export const normalApi = createApi({
  reducerPath: "normalApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (limit) => createRequest(`/coins?limit=${limit}`),
    }),
    // getCryptoDetails: builder.query({
    //     query: (coinId)=>createRequest(`/coin/${coinId}`)
    // }),
    // getCryptoHistory: builder.query({
    //     query: ({coinId,timePeriod})=>createRequest(`/coin/${coinId}/history/${timePeriod}`)
    // }),
    getExchanges: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  // useGetCryptoDetailsQuery,
  // useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = normalApi;
