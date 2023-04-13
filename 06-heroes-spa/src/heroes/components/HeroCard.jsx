import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroeUrl = `/assets/heroes/${id}.jpg`;

  const eliminateAlterEgoOfCharacters = () => {
    if (characters.includes(alter_ego)) {
      const index = characters.indexOf(alter_ego);
      return characters.slice(index + alter_ego.length + 1);
    }
  };

  const newCharactersFiltered = eliminateAlterEgoOfCharacters() ?? "";

  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroeUrl} alt={superhero} className="card-img" />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              <p className="card-text">{newCharactersFiltered}</p>

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>más...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
