import { useDispatch } from "react-redux";
import { favouritesSlice } from "../store/favourites/favourites.slice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";

const rootActions = {
  ...favouritesSlice.actions,
};
//хук для получения всех экшенов
export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
