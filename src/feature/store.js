import { configureStore } from "@reduxjs/toolkit";
import { clogApi } from "./serv/clogApi";

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [clogApi.reducerPath]: clogApi.reducer,
      },

      middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(clogApi.middleware),
})