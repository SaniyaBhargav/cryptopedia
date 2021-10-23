import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const headers = {
//   "x-rapidapi-host": process.env.REACT_APP_NEWS_API_HOST,
//   "x-rapidapi-key": process.env.REACT_APP_NEWS_API_KEY,
// };

const baseUrl = process.env.REACT_APP_NEWS_API_BASE_URL;

const createRequest = (url) => ({ url }); //headers: headers });
export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () =>
        createRequest(
          "/news?access_key=22b99f74f9ca21ded9fe01e759a8a807&keywords=Crypto&languages=en"
        ),
    }),
  }),
});

export const {
  useGetNewsQuery,
  // useGetCryptoDetailsQuery,
  // useGetCryptoHistoryQuery,
  // useGetExchangesQuery
} = newsApi;
