import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './useSlice';

export const store = configureStore({
  reducer: { users: usersReducer },
});
