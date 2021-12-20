import {
  configureStore,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import "immer";
import "redux-thunk";

export interface MultiplierState {
  value: number;
}

const initialState: MultiplierState = {
  value: 1,
};

export const multiplierSliceName = "multiplier"
export const multiplierSlice = createSlice({
  name:multiplierSliceName ,
  initialState,
  reducers: {
    multiplyByAmount: (state, action: PayloadAction<number>) => {
      state.value *= action.payload;
    },
    resetValue: (state) => {
      state.value = initialState.value;
    },
  },
});

type MultiplierStateInterface = { multiplier: MultiplierState };
export let useSliceSelector: TypedUseSelectorHook<MultiplierStateInterface> =
  useSelector;

const configureLocalStore = () =>
  configureStore({
    reducer: { multiplier: multiplierSlice.reducer },
  });

type SliceDispatch = ReturnType<typeof configureLocalStore>["dispatch"];
type AppDispatchInterface = SliceDispatch;

export let useSliceDispatch = () => useDispatch<AppDispatchInterface>();

export const initializeSlicePackage = (
  useAppDispatch: typeof useSliceDispatch,
  useAppSelector: typeof useSliceSelector
) => {
  useSliceDispatch = useAppDispatch;
  useSliceSelector = useAppSelector;
};

export const { multiplyByAmount, resetValue } = multiplierSlice.actions;
export const selectMultiplierValue = (state: MultiplierStateInterface) => state.multiplier.value;
export const multiplierSliceReducer = multiplierSlice.reducer;
