import propTypes from "prop-types";

import styles from "./feedback-options.module.css";

//new

export const FeedbackOptions = ({options, onLeaveFeedback}) => (
<div >
    {options.map( option => {
        return (<button key={option}
            className={styles.feedbackBtn}
            onClick={() => onLeaveFeedback(option)}>{option}</button>)
    })}
</div>
)

FeedbackOptions.propTypes = {
    options: propTypes.arrayOf(propTypes.string).isRequired,
    onLeaveFeedback: propTypes.func.isRequired,
};


//prev
// export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
//     <div>
//         {options.map((option, index) => (
//             <button
//                 className={styles.feedbackBtn}
//                 key={index}
//                 onClick={() => onLeaveFeedback(option)}
//             >
//                 {option}
//             </button>
//         ))}
//     </div>
// );