import React from 'react';
import PropTypes from "prop-types";
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import {FaTimes, FaEdit} from "react-icons/fa"
// import {useState} from "react";
import Card from './shared/Card';

function FeedbackItem({item}) {

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
    // const [rating, setRating] = useState(7);
    // const [text, setText] = useState("This is an example of a feedback item");

    // const handleClick = function(){
    //     setRating((prev)=>{
    //         return prev + 1;
    //     });
    // }

  

  return (
    <Card >
        <div className="num-display">{item.rating}</div>
        <button onClick = {()=> deleteFeedback(item.id)} className="close"><FaTimes color="purple"/></button>
        <button className='edit' onClick={() => editFeedback(item)}><FaEdit color="purple"/></button>
        <div className="text-display"> {item.text} </div>
        {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}
export default FeedbackItem