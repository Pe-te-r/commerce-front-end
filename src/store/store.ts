import { configureStore } from '@reduxjs/toolkit';
import { AuthApi } from '../slice/userSlice';
const store = configureStore({
  reducer: {
    [AuthApi.reducerPath]: AuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware),
});

export default store;
