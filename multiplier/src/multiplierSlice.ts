import {
    Action,
    configureStore,
    createSlice,
    PayloadAction,
    ThunkAction,
  } from "@reduxjs/toolkit";
  import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
  import "immer";
  import "redux-thunk";

export interface MultiplierState {
    value: number;
  }
  
  const initialState: MultiplierState = {
    value: 0,
  };
  
  export const multiplierSlice = createSlice({
    name: "multiplier",
    initialState,
    reducers: {
      multiplyByAmount: (state, action: PayloadAction<number>) => {
        state.value *= action.payload;
      },
    },
  });
  
  type RootStateInterface = { multiplier: MultiplierState };
  type AppThunkInterface<ReturnType = void> = ThunkAction<
    ReturnType,
    RootStateInterface,
    unknown,
    Action<string>
  >;
  
  export let useSliceSelector: TypedUseSelectorHook<RootStateInterface> =
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
  
  export const { multiplyByAmount } = multiplierSlice.actions;
  export const selectMultiplierValue = (state: RootStateInterface) => state.multiplier.value;
  export const multiplierSliceReducer = multiplierSlice.reducer;
  