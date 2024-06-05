import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./favourites/favourites.slice";
import userReducer from "./user/user.slice";
import { api } from "./api/api";
import { createLogger } from "redux-logger";

const logger = createLogger({ collapsed: true });

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  user: userReducer,
  [api.reducerPath]: api.reducer,
});

export const setUpStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware).concat(logger),
  });
};

export type TAppStore = ReturnType<typeof setUpStore>;
export type TRootState = ReturnType<typeof rootReducer>;
//тип dispatch-а стора включает все экшены, определенные в сторе
export type TAppDispatch = TAppStore["dispatch"];
