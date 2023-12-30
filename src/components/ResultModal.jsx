import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
const ResultModal = forwardRef(function ResultModal(
  { timeLimit, remainingTime, onReset },
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  const userLost = remainingTime <= 0;
  const BySeconds = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1- remainingTime / (timeLimit * 1000)) * 100);
  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        your time limit is <strong>{timeLimit} seconds</strong>
      </p>
      <p>
        you stopped the timer with <strong>{BySeconds} seconds</strong> left
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>close</button>
      </form>
    </dialog>,document.getElementById("modal")
  );
});
export default ResultModal;
