import { useRef, useState } from "react";
import "./ToggleText.css";

function ToggleText() {
  const textRef = useRef(null);
  const isVisible = useRef(true);
  const [duration, setDuration] = useState(0.5);

  function handleToggle() {
    const animationDuration = `${duration}s`;
    textRef.current.style.transition = `all ${animationDuration} ease`;
    if (isVisible.current) {
      textRef.current.style.maxHeight = "0";
      textRef.current.style.opacity = "0";
    } else {
      textRef.current.style.maxHeight = "200px";
      textRef.current.style.opacity = "1";
    }

    isVisible.current = !isVisible.current;
  }

  return (
    <div className="container">
      <button onClick={handleToggle} className="button">
        {isVisible.current ? "Hide text" : "Show text"}
      </button>
      <input
        type="number"
        value={duration}
        min="0.1"
        step="0.1"
        max="10"
        style={{ marginLeft: "10px" }}
        onChange={(e) => setDuration(e.target.value)}
      />
      <p ref={textRef} className="text">
        This is a hidden text. Plis press the button to hide or show it!
      </p>
    </div>
  );
}

export default ToggleText;
