const Particular = ({ left }) => {
  return (
    <div
      className={`flex flex-row items-center justify-center ${left ? "flex-row" : "flex-row-reverse"}`}
    >
      <h2>Particular left</h2>
      <h2>Particular right</h2>
    </div>
  );
};

export default Particular;
