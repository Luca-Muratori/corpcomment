import { useState } from "react";
import { MAX_CHARACTERS } from "./lib/constant";



export default function FeedBackForm() {
  const [text, setText] = useState("");

  const charCount=MAX_CHARACTERS - text.length

  return (
    <form action="" className="form">
      <textarea
        id="feedback-textarea"
        placeholder="true"
        spellCheck={false}
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <label htmlFor="feedback-textarea">
        Enter your opinion and remember to add # before the name of the company
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
