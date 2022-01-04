import {useContext } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa'
import { PropTypes } from 'prop-types';

import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';

const FeedbackItem = ({ item }) => {
const { rating, text, id } = item;

const { deleteFeedback, editFeedback } = useContext(FeedbackContext);


  return (
    <Card >
      <div className="num-display">{ rating } </div>
      <button className="close" onClick={() => deleteFeedback(id)}>
        <FaTimes color='purple' />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color='purple' />
      </button>
        <div className="text-display">{ text }</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
