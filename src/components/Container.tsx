import Header from './Header'
import FeedbackList from './FeedbackList'
import { TFeedbackItem } from './lib/types'

type ContainerProps={
  feedbackItems: TFeedbackItem[],
  isLoading:boolean,
  errorMessage:string,
  handleAddToList:(text:string)=>void
}

export default function Container({feedbackItems, isLoading, errorMessage, handleAddToList}:ContainerProps) {
  return (
    <div className='container'>
      <Header onAddToList={handleAddToList}/>
      <FeedbackList errorMessage={errorMessage} feedbackItems={feedbackItems} isLoading={isLoading}/>
    </div>
  )
}
