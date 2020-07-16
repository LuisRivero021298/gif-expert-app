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
    <form className="form-inline add-category" onSubmit={handleSubmit}>
      <div className="form-group mb-2 mr-3">
        <input
          className="form-control"
          type="text"
          value={newCategory}
          onChange={handleInputChange}
        />
      </div>

      <button className="btn btn-primary mb-2" type="submit">
        search
      </button>
    </form>
  );
};
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
