import React from "react";
import PropTypes from "prop-types";

const GifItem = ({ title, image }) => {
  return (
    <article className="card">
      <img className="card-image-top" src={image} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </article>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default GifItem;
