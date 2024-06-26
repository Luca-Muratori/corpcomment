import Header from "./Header";
import FeedbackList from "../feedback/FeedbackList";
import { TFeedbackItem } from "../lib/types";

export default function Container() {
  return (
    <div className="container">
      <Header />
      <FeedbackList />
    </div>
  );
}
