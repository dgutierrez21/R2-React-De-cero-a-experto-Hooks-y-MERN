import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  function handleAniadir(evento) {
    console.log(evento);

    console.log("+1");

    // ❌❌❌
    value = 1000;
    console.log(value);
  }
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
      <button onClick={handleAniadir}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
