import { useId, useRef, useState } from "react";

export default function Player() {
  const playerNameInput = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState();
  const nameSuggestionId = useId();

  // const [submitted, setSubmitted] = useState(false);

  // function handleChange(event) {
  //   setEnteredPlayerName(event.target.value);
  // }

  function handleClick() {
    const name = playerNameInput.current.value;
    setEnteredPlayerName(name);
    // setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={playerNameInput}
          value={enteredPlayerName}
          type="text"
          aria-describedby={nameSuggestionId}
          // onChange={handleChange}
        />
        <p id={nameSuggestionId}>Go with something really cool</p>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
