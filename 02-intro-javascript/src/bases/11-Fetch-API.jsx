//Fetch API

const apiKey = "oTrT90IZIpCb94Dgc9OozLGeZPmz589u";

const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const peticion = fetch(apiUrl);

peticion
  .then((res) => res.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  })
  .catch((err) => console.warn(err));
