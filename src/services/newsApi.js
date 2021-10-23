import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://newscatcher.p.rapidapi.com/v1";

const headers = {
  "x-rapidapi-host": "newscatcher.p.rapidapi.com",
  "x-rapidapi-key": "709878c485mshce3e3f50be2b3abp198cddjsn6071ce2a9f2c",
};

const createRequest = (url) => ({ url, headers: headers });
export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => createRequest("/search_free?q=Crypto&lang=en&media=True"),
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
