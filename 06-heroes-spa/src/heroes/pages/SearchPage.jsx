import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import queryString from "query-string";
import { getHeroByName } from "../helpers/getHeroByName";
import { useMemo } from "react";

export const SearchPage = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const { q = "" } = queryString.parse(search);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const heroes = useMemo(() => getHeroByName(q), [q]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (searchText.trim().length < 2) return;

    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>SearchPage</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form action="" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />

            <button className="btn btn-primary mt-3">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary">Search a hero</div>

          <div className="alert alert-danger">
            No hero with <b>{q}</b>
          </div>

          {heroes.map((hero) => (
            <div className="mt-3">
              <HeroCard key={hero.id} {...hero} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
