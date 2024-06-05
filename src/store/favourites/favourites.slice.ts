import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRecipe } from "../../types/recipe";

const initialState: IRecipe[] = [];

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    toggleFavourites: (state, action: PayloadAction<IRecipe>) => {
      const isExist = state.some((recipe) => recipe.id === action.payload.id);

      if (isExist) {
        const index = state.findIndex(
          (recipe) => recipe.id === action.payload.id
        );
        if (index !== -1) state.splice(index, 1);
      } else {
        state.push(action.payload);
      }
    },
  },
});

export default favouritesSlice.reducer;
