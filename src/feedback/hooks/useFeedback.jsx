import { useContext } from 'react'
import { FeedbackContext } from '../context/FeedbackProvider'

const useFeedback = () => {
    const context = useContext(FeedbackContext)
  return context
}

export default useFeedback