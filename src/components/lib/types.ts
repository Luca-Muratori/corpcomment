export type TFeedbackItem={
    id:number,
    upvoteCount: number,
    badgeLetter: string,
    company:string,
    text:string,
    daysAgo:number
}

export type HashtagListProp={
    companyList:string[],
    onClick:(company:string)=>void,
  }

export type HashtagItemProp={
    onClick:(company:string)=>void,
    company:string,
}

export type ErrorMessageProp={
    onClick:(company:string)=>void,
    errorMsg:string
}