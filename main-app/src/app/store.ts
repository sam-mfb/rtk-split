import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { counterSliceReducer, counterSliceName } from "counter";
import {multiplierSliceReducer, multiplierSliceName} from "multiplier"

export const store = configureStore({
  reducer: {
    [counterSliceName]: counterSliceReducer,
    [multiplierSliceName]: multiplierSliceReducer
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
