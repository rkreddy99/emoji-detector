import React, { useState } from "react";
import "./styles.css";
import animals_nature from "./data";

const emojis = Object.keys(animals_nature);

export default function App() {
  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);
    var set = false;

    if (inputEmoji in animals_nature) {
      setMeaning(animals_nature[inputEmoji]);
      set = true;
    } else {
      for (var key in animals_nature) {
        if (animals_nature[key] === inputEmoji.toLowerCase()){
          setMeaning(key);
          set = true;
          break;
        }
      }
    }
    
    if (set === false) {
      setMeaning("Emoji not found!!!")
    }
  }

  function emojiClickHandler(inputEmoji) {
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
        placeholder={"Type \"monkey\" or 🐒"}
      />
      {/* <h2> {emoji} </h2> * Concept 1: JSX */}
      <h2> {meaning} </h2> {/** how much part is re-rendered. */}
      <div className="emoji-list">
        {
          emojis.map((curr_emoji) => (
            <span
              className="emoji"
              onClick={() => emojiClickHandler(curr_emoji)}
              style={{}}
            >
              {" "}
              {curr_emoji}{" "}
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
