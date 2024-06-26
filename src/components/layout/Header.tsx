import Logo from "../Logo";
import Pattern from "../Pattern";
import PageHeading from "../PageHeading";
import FeedBackForm from "../feedback/FeedBackForm";
import { useFeedbackItemsStore } from "../stores/feeddbackItemStore";

export default function Header() {
  const addItemToList=useFeedbackItemsStore(state=>state.addItemToList)
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedBackForm onAddToList={addItemToList} />
    </header>
  );
}
