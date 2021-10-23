import { configureStore } from "@reduxjs/toolkit";
import { normalApi } from "../services/normalApi";
import { newsApi } from "../services/newsApi";
// import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({
  reducer: {
    [normalApi.reducerPath]: normalApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    // [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
