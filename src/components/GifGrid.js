import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getGifs = async (search) => {
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

    console.log(listGifs);
    setImages(listGifs);
  };

  useEffect(() => {
    getGifs(category);
  }, []);

  return (
    <div>
      <h3>{category}</h3>

      {images.map((gifImages) => (
        <GifItem key={gifImages._id} {...gifImages} />
      ))}
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
