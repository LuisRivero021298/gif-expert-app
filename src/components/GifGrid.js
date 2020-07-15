import React from "react";
import PropTypes from "prop-types";

const GifGrid = ({ category }) => {
  const getGif = async (search) => {
    const url = "https://api.giphy.com/v1/gifs/search";
    const apiKey = "VjqslXeWE36lhDESYDaQLqqFZCHN2SgY";

    const resp = await fetch(`${url}?q=${search}&limit=15&api_key=${apiKey}`);
    const { data } = await resp.json();
    const listGifs = data.map((gif) => {
      return {
        _id: gif.id,
        title: gif.title,
        image: gif.images.original.url,
      };
    });

    return listGifs;
  };

  getGif(category);

  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};

GifGrid.defaultProps = {};

GifGrid.propTypes = {
  GifGrid: PropTypes.any,
};

export default GifGrid;
