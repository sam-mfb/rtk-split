import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { counterSliceReducer, counterSliceName } from "counter";

export const store = configureStore({
  reducer: {
    [counterSliceName]: counterSliceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
