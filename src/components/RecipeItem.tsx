import React from "react";
import { useActions } from "../hooks/useActions";
import { useAppSelector } from "../hooks/redux";
import { IRecipe } from "../types/recipe";

export const RecipeItem = ({ recipe }: { recipe: IRecipe }) => {
  const favourites = useAppSelector((state) => state.favourites);

  // Получение экшенов с хуком useActions позволяет не импортировать в
  //компонент dispatch и actions из слайсов
  const { toggleFavourites } = useActions();

  const isExists = favourites.some((r) => r.id === recipe.id);
  return (
    <div>
      <h3>{recipe.name}</h3>
      <button onClick={() => toggleFavourites(recipe)}>
        {isExists ? "Remove from" : "Add to favourites"}
      </button>
    </div>
  );
};
