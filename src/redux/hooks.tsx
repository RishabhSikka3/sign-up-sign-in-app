// src/hooks.ts
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { store } from "./store";

// Type for the store's dispatch function
type AppDispatch = typeof store.dispatch;

// Type for the root state
type RootState = ReturnType<typeof store.getState>;

// Typed useDispatch hook
export const useDispatch = () => useReduxDispatch<AppDispatch>();

// Typed useSelector hook
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
