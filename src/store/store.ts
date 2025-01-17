import { configureStore } from '@reduxjs/toolkit';
import { AuthApi } from '../slice/authSlice';
import { userAPi } from '../slice/userSlice';
const store = configureStore({
  reducer: {
    [AuthApi.reducerPath]: AuthApi.reducer,
    [userAPi.reducerPath]: userAPi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware,userAPi.middleware),
});

export default store;
