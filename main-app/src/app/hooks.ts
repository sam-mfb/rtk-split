import { initializeSlicePackage as initializeCounterSlice } from "counter";
import { initializeSlicePackage as initializeMultiplierSlice } from "multiplier";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

initializeCounterSlice(useAppDispatch, useAppSelector);
initializeMultiplierSlice(useAppDispatch, useAppSelector)