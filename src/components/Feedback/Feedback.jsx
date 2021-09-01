import { Buttons } from './Buttons/Buttons';

function Feedback({ onClickHandler }) {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <Buttons type={'button'} onClickHandler={onClickHandler} />
    </div>
  );
}

export { Feedback };
