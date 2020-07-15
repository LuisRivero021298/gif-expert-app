import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
const GifExpertApp = () => {
  const listCategories = ["Naruto"];
  const [categories, setCategories] = useState(listCategories);

  return (
    <>
      <h1>GifExpertApp</h1>
      <hr></hr>
      <AddCategory setCategories={setCategories} />
      <ul>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ul>
    </>
  );
};

export default GifExpertApp;