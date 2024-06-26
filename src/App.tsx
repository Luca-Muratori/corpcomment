import Footer from "./components/layout/Footer";
import HashtagList from "./components/hastag/HashtagList";
import Container from "./components/layout/Container";
import { useEffect } from "react";
import { useFeedbackItemsStore } from "./components/stores/feeddbackItemStore";

function App() {

  const fetchFeedbackItems=useFeedbackItemsStore(state=>state.fetchFeedbackItems)
 
  useEffect(()=>{
    fetchFeedbackItems()
  }, [fetchFeedbackItems])
  return (
    <div className="app">
      <Footer />
        <Container />
        <HashtagList />
    </div>
  );
}

export default App;
