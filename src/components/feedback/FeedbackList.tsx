import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackItemsStore } from "../stores/feeddbackItemStore";

export default function FeedbackList() {
  const isLoading=useFeedbackItemsStore((state)=>state.isLoading)
  const errorMessage=useFeedbackItemsStore((state)=>state.errorMessage)
  const filteredFeedbackItems=useFeedbackItemsStore((state)=>state.getFilteredFeedbackItems())
  return (
    <ol className="feedback-list">
      {isLoading ? <Spinner /> : null}
      {errorMessage ? <ErrorMessage errorMsg={errorMessage} /> : null}
      {filteredFeedbackItems.map((filteredFeedbackItem) => (
        <FeedbackItem key={filteredFeedbackItem.id} feedbackItem={filteredFeedbackItem} />
      ))}
    </ol>
  );
}
