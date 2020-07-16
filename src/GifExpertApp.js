import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
const GifExpertApp = () => {
  const listCategories = ["Naruto"];
  const [categories, setCategories] = useState(listCategories);

  return (
    <>
      <h1>Gif Expert App</h1>
      <hr></hr>
      <AddCategory setCategories={setCategories} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
