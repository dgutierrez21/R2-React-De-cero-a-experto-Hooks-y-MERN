import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { data, isLoading, error } = useFetch(
    "https://api.breakingbadquotes.xyz/v1/quotes"
  );

  console.log({ data, isLoading, error });
  return (
    <>
      <h1>BreakingBad Quotes</h1>

      <hr />
    </>
  );
};
