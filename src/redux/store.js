import { configureStore } from "@reduxjs/toolkit";
import skillRouteSlice from "./slice/skillRouteSlice";

const store = configureStore({
  reducer: {
    skillRoutes: skillRouteSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
console.log("create store : ", store.getState());

store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});
export default store;
