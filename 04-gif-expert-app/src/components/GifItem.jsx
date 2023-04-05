export const GifItem = ({ titulo, url }) => {
  console.log(titulo);
  console.log(url);

  return (
    <div className="card">
      <img src={url} alt={titulo} />
    </div>
  );
};
