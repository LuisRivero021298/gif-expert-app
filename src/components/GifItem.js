import React from "react";
import PropTypes from "prop-types";

const GifItem = ({ title, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default GifItem;
