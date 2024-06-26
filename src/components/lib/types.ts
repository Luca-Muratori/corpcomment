export type TFeedbackItem = {
  id: number;
  upvoteCount: number;
  badgeLetter: string;
  company: string;
  text: string;
  daysAgo: number;
};

export type HashtagListProp = {
  onClick: (company: string) => void;
};

export type HashtagItemProp = {
  onClick: (company: string) => void;
  company: string;
};

export type ErrorMessageProp = {
  onClick?: (company: string) => void;
  errorMsg: string;
};

export type TFeedbackItemsContext = {
  isLoading: boolean;
  companyList: string[];
  errorMessage: string;
  handleAddToList: (text: string) => void;
  filteredFeedbackItems: TFeedbackItem[];
  handleSelectedCompany: (text: string) => void;
};

export type FeedbackItemsContextProviderProps = {
  children: React.ReactNode;
};

export type FeedbackFormProps = {
  onAddToList: (text: string) => void;
};

export type Store={
  feedbackItems:TFeedbackItem[];
  isLoading:boolean;
  errorMessage:string;
  selectedCompany:string;
  getCompanyList:()=>string[];
  getFilteredFeedbackItems:()=>TFeedbackItem[];
  addItemToList:(text:string)=>Promise<void>;
  selectCompany:(company:string)=>void;
  fetchFeedbackItems:()=>Promise<void>
}