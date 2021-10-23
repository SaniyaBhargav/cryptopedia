import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://api.mediastack.com/v1";

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

export const { useGetNewsQuery } = newsApi;
