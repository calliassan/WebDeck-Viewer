const Controls = ({ index, total, next, prev }) => {
  return (
    <div className="controls">
      <button onClick={prev} disabled={index === 0}>
        ⬅ Prev
      </button>

      <span className="counter">
        {index + 1} / {total}
      </span>

      <button onClick={next} disabled={index === total - 1}>
        Next ➡
      </button>
    </div>
  );
};

export default Controls;
