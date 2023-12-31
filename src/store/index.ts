import { configureStore } from "@reduxjs/toolkit";
import filmReducer from "./films/slice";

const store = configureStore({
  reducer: {
    film: filmReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
