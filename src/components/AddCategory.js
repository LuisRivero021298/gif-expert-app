import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [newCategory, setNewCategory] = useState("");
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setNewCategory(newValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCategory.trim().length > 2) {
      setCategories(() => [newCategory]);
      setNewCategory("");
    }
  };

  return (
    <form className="add-category" onSubmit={handleSubmit}>
      <input type="text" value={newCategory} onChange={handleInputChange} />
      <button type="submit">Add</button>
    </form>
  );
};
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
