export const getGifs = async (categoria) => {
  const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=oTrT90IZIpCb94Dgc9OozLGeZPmz589u&q=${categoria}&limit=10`;

  console.log(searchUrl);

  const resp = await fetch(searchUrl);

  const { data } = await resp.json();

  console.log(data);

  const gifs = data.map((img) => ({
    id: img.id,
    titulo: img.title.trim().length == 0 ? categoria : img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log(gifs);
  return gifs;
};
