import React, { useState } from "react";
import "./styles.css";
import animals_nature from "./data";

const emojis = Object.keys(animals_nature);

export default function App() {
  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("lion");
  const [showEmoji, setShowEmoji] = useState("🦁")

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);
    var set = false;

    if (inputEmoji in animals_nature) {
      // setMeaning(animals_nature[inputEmoji]);
      setShowEmoji(inputEmoji)
      setMeaning(animals_nature[inputEmoji])
      set = true;
    } else {
      for (var key in animals_nature) {
        if (animals_nature[key] === inputEmoji.toLowerCase()){
          setShowEmoji(key);
          setMeaning(inputEmoji)
          set = true;
          break;
        }
      }
    }
    
    if (set === false) {
      setShowEmoji("☐")
      setMeaning("Emoji not found!!!")
    }
  }

  function emojiClickHandler(inputEmoji) {
    setShowEmoji(inputEmoji)
    setEmoji(inputEmoji)
    setMeaning(animals_nature[inputEmoji]);
  }

  return (
    /** concept 3 is onchange */
    <div className="App">
      <h1 className="header">Know your emoji 🦄</h1>
      <input
        className="input"
        onChange={changeHandler}
        value={emoji}
        placeholder={"Type \"lion\" or 🦁"}
      />
      {/* <h2> {emoji} </h2> * Concept 1: JSX */}
      <h2> {showEmoji} - {meaning} </h2> {/** how much part is re-rendered. */}
      <div className="emoji-list">
        {
          emojis.map((curr_emoji) => (
            <span
              className="emoji"
              onClick={() => emojiClickHandler(curr_emoji)}
              style={curr_emoji === showEmoji ? {fontSize:"2.8rem"} : {} }
            >
              {" "}{curr_emoji}{" "}
            </span>
          ))
        }
      </div>
      <footer className="footer">
        <p>You can know the meaning of your emoji or find the emoji you are looking for.</p>
      </footer>
    </div>
  );
}
