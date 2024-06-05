import React from "react";
import { useAppSelector } from "../hooks/redux";

export const Header = () => {
  const favourites = useAppSelector((state) => state.favourites);
  return (
    <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
      <h3>Favourites</h3>
      <span>{favourites.length}</span>
    </div>
  );
};
