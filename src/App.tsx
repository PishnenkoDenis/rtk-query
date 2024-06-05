import React from "react";
import { Form } from "./components/Form";
import { Header } from "./components/Heaader";
import { Posts } from "./components/Posts";
import { RecipeItem } from "./components/RecipeItem";
import { User } from "./components/User";

const recipes = [
  { id: 1, name: "Recipe1" },
  { id: 2, name: "Recipe2" },
  { id: 3, name: "Recipe3" },
  { id: 4, name: "Recipe4" },
];

function App() {
  return (
    <div className="App">
      <User />
      <Posts />
      <Header />
      {recipes.map((recipe) => (
        <RecipeItem recipe={recipe} key={recipe.id} />
      ))}
      <br />
      <Form />
    </div>
  );
}

export default App;
