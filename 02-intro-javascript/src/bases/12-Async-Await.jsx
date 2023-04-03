// Async - Await

// La sintaxis async/await permite escribir código asincrónico de manera síncrona y más legible, evitando el uso promesas anidadas. Con async/await, se puede hacer una función asíncrona que devuelve una promesa, y luego se puede esperar el resultado de la promesa usando la palabra clave await, lo que hace que el código parezca síncrono. En otras palabras, async/await es una forma más limpia y fácil de escribir código asíncrono.

// const getImagenPromesa = () =>
//   new Promise((resolve) => resolve("https://aslñdfkj.com"));

// getImagenPromesa().then(console.log);

const getImagen = async () => {
  try {
    const apiKey = "oTrT90IZIpCb94Dgc9OozLGeZPmz589u";

    const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

    const resp = await fetch(apiUrl);

    const { data } = await resp.json();

    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  } catch (error) {
    console.warn("Ha ocurrido un error.", error);
  }
};

getImagen();
