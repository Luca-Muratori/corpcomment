import { useState } from "react";
import { MAX_CHARACTERS } from "./lib/constant";

type FeedbackFormProps = {
  onAddToList: (text: string) => void;
};

export default function FeedBackForm({ onAddToList }: FeedbackFormProps) {
  const [text, setText] = useState("");

  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }
    setText(event.target.value);
  };

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
    event?.preventDefault()
    onAddToList(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} action="" className="form">
      <textarea
        id="feedback-textarea"
        placeholder="true"
        spellCheck={false}
        value={text}
        onChange={handleChange}
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
