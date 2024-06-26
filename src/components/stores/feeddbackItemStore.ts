import { create } from "zustand";
import { Store, TFeedbackItem } from "../lib/types";

export const useFeedbackItemsStore=create<Store>((set, get) => ({
  feedbackItems: [],
  isLoading: false,
  errorMessage: "",
  selectedCompany: "",
  getCompanyList:()=>{
    return get().feedbackItems
        .map((item) => item.company)
        .filter((company, index, array) => {
          return array.indexOf(company) === index;
        })
  },
  getFilteredFeedbackItems:()=>{
    return get().selectedCompany
    ? get().feedbackItems.filter(
        (feedbackItem) => feedbackItem.company === get().selectedCompany
      )
    : get().feedbackItems
  },
  addItemToList: async (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };

    set((state)=>({
        feedbackItems: [...state.feedbackItems, newItem]
    }))

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  },
  selectCompany:(company: string) => {
    set(()=>({
        selectedCompany:company
    }))
  },
  fetchFeedbackItems:async () => {
    set(()=>({
        isLoading:true
    }))
    try {
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      set(()=>({
        feedbackItems:data.feedbacks
      }))
    } catch (error) {
      set(()=>({
        errorMessage:'there is some error here'
      }))
    }

    set(()=>({
        isLoading:false
    }))
  },
}));
