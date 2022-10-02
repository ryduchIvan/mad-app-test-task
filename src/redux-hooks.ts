import {RootState, store} from "./store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;