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

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const alertClasses = `alert ${
    showSearch ? "alert-primary" : "alert-danger"
  } ${!showError && !showSearch && "d-none"} animate__animated animate__fadeIn`;

  const alertText = `${
    showError ? `The hero "${q}" has not been found` : "Search a hero"
  }`;

  const handleSearchSubmit = (e) => {
    e.preventDefault();

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

          <div className={alertClasses}>{alertText}</div>

          {heroes.map((hero) => (
            <div key={hero.id} className="mt-3">
              <HeroCard {...hero} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
