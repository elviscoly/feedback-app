import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const [feedbackEdit, setFeedbackEdit ] = useState({
    item: {},
    edit: false,
  });
  
  // To add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // To delete feedback
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete this feedback?')) {
    setFeedback(feedback.filter(feedback => feedback.id !== id));
    }
  };

  // Update feedback item
  const updateFeedback = (id, updatedFeedback) => { 
    setFeedback(feedback.map(feedback => feedback.id === id ? updatedFeedback : feedback));
  };

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  }

  return <FeedbackContext.Provider value={{
    feedback,
    feedbackEdit,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
  }}>
    {children}
  </FeedbackContext.Provider>

};

export default FeedbackContext;