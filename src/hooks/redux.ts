import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { TAppDispatch, TRootState } from "../store/store";
import { useDispatch } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
export const useAppDispatch = () => useDispatch<TAppDispatch>();
