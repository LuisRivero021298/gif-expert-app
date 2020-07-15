import React from "react";
import PropTypes from "prop-types";

const GifItem = ({ title, image }) => {
  return (
    <div>
      <h4>{title}</h4>
      <img src={image} alt={title} width="200px" />
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default GifItem;
