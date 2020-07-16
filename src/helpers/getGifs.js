export const getGifs = async (search) => {
  const url = "https://api.giphy.com/v1/gifs/search";
  const apiKey = "VjqslXeWE36lhDESYDaQLqqFZCHN2SgY";

  const resp = await fetch(
    `${url}?q=${encodeURI(search)}&limit=10&api_key=${apiKey}`
  );
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

