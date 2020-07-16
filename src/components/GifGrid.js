import React from "react";
import PropTypes from "prop-types";
import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category = "" }) => {
  const { data: gifList, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && "Loading..."}
      <div className="gif-grid">
        {gifList.map((gifs) => (
          <GifItem key={gifs._id} {...gifs} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
