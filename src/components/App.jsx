import  { useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";



function App(){
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);


const countTotalFeedback = () => {
  const total = good + neutral + bad;
  return total;
}

const handleFeedback = (option) => {
  switch (option){
    case 'good':
      setGood(prevState => prevState + 1);
      break;

    case 'neutral':
      setNeutral(prevState => prevState + 1);
      break;

    case 'bad':
        setBad(prevState => prevState + 1);
        break;

    default:
      return;


  }
}

const countPositiveFeedbackPercentage = () => {
  if (countTotalFeedback() === 0) {
    return 0;
  };
  return Math.round((good / countTotalFeedback())* 100);
};

return (

    <Section title="Please leave feedback">
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleFeedback}
      />{' '}
      
      {countTotalFeedback() !== 0 ? (
      <Statistics
      good = {good}
      neutral = {neutral}
      bad = {bad}
      total = {countTotalFeedback()}
      countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
      />
      ) 
      : (
      <Notification message="There is no feedback"></Notification>
    )}
    </Section>
  
);
}


export default App;



