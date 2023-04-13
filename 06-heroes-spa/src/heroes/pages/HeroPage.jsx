import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { heroId } = useParams();

  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  const { superhero, alter_ego, publisher, first_appearance, characters } =
    hero;

  const handleNavigateBack = () => navigate(-1);

  if (!hero) return <Navigate to="/marvel" />;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/heroes/${heroId}.jpg`}
          alt={superhero}
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3>{superhero}</h3>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {publisher}
          </li>

          <li className="list-group-item">
            <b>First Appearance: </b>
            {first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>

        <button className="btn btn-outline-info" onClick={handleNavigateBack}>
          Back
        </button>
      </div>
    </div>
  );
};
