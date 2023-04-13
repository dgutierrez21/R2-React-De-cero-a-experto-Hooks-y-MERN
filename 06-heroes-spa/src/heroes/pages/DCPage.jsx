import { HeroList } from "../components";

export const DCPage = () => {
  return (
    <>
      <h1 className="animate__animated animate__fadeIn">Dc Comics</h1>

      <hr />

      <HeroList publisher="DC Comics" />
    </>
  );
};
