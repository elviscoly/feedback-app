import { useContext, useState, useEffect } from 'react';

import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(+feedbackEdit.item.rating);
    } else {
      // setText('');
      // setRating(10);
    } 
  }, [feedbackEdit]);


  const handleTextChange = (e) => {
    if(text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if(text !== '' && text.length <= 10) {
      setBtnDisabled(true);
      setMessage('Please enter at least 10 characters');
    } else {
      setMessage(null);
      setBtnDisabled(false);
      
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length > 10) {
      const newFeedback = {
        text,
        rating
      };
      if(feedbackEdit.edit) {
        newFeedback.id = feedbackEdit.item.id;
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {

      addFeedback(newFeedback);
   
      }
      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input onChange={handleTextChange} value={text} type="text" placeholder="Write a review" />
          <Button isDisabled={ btnDisabled} type="submit" >Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
      
    </Card>
  )

}

export default FeedbackForm;