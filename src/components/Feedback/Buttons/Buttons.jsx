function Buttons({ type, onClickHandler }) {
  return (
    <div>
      <button type={type} onClick={() => onClickHandler('good')}>
        Good
      </button>
      <button type={type} onClick={() => onClickHandler('neutral')}>
        Neutral
      </button>
      <button type={type} onClick={() => onClickHandler('bad')}>
        Bad
      </button>
    </div>
  );
}

export { Buttons };
