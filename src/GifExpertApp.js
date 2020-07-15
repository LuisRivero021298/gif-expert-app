import React, { useState } from "react";

export const GifExpertApp = () => {
  const listCategories = ["One punch", "Samurai x", "Dragon ball"];
  const [categories, setCategory] = useState(listCategories);

  const handleAdd = () => {
    setCategory((cat) => [...cat, "New"]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <hr></hr>
      <button type="button" onClick={handleAdd}>
        Add
      </button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
