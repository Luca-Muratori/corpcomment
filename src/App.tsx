import Footer from "./components/layout/Footer";
import HashtagList from "./components/hastag/HashtagList";
import Container from "./components/layout/Container";
import { TFeedbackItem } from "./components/lib/types";
import { useEffect, useMemo, useState } from "react";

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  const companyList = useMemo(
    () =>
      feedbackItems
        .map((item) => item.company)
        .filter((company, index, array) => {
          return array.indexOf(company) === index;
        }),
    [feedbackItems]
  );

  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter(
            (feedbackItem) => feedbackItem.company === selectedCompany
          )
        : feedbackItems,
    [feedbackItems, selectedCompany]
  );

  const handleAddToList = async (text: string) => {
    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: text
        .split(" ")
        .find((word: string) => word.includes("#"))!
        .substring(1),
      badgeLetter: text
        .split(" ")
        .find((word: string) => word.includes("#"))!
        .substring(1)
        .substring(0, 1)
        .toUpperCase(),
    };

    setFeedbackItems([...feedbackItems, newItem]);
    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
  };

  const handleSelectedCompany = (company: string) => {
    setSelectedCompany(company);
  };

  useEffect(() => {
    const fetchFeedbackItems = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );

        if (!res.ok) {
          throw new Error("something went wrong");
        }

        const data = await res.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setErrorMessage("something went wrong");
      }

      setIsLoading(false);
    };

    fetchFeedbackItems();
  }, []);

  return (
    <div className="app">
      <Footer />
      <Container
        errorMessage={errorMessage}
        isLoading={isLoading}
        feedbackItems={filteredFeedbackItems}
        handleAddToList={handleAddToList}
      />
      <HashtagList companyList={companyList} onClick={handleSelectedCompany} />
    </div>
  );
}

export default App;
