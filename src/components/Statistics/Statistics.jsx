import propTypes from "prop-types";

import styles from "./statistics.module.css";

export const Statistics = ({ good, neutral, bad, total, countPositiveFeedbackPercentage }) => (
    <ul className={styles.feedbackList}>
        <li className={styles.feedbackListItem}>Good: {good}</li>
        <li className={styles.feedbackListItem}>Neutral: {neutral}</li>
        <li className={styles.feedbackListItem}>Bad: {bad}</li>
        <li className={styles.feedbackListItem}>Total: {total}</li>
        <li className={styles.feedbackListItem}>
            Positive feedback: {countPositiveFeedbackPercentage} %
        </li>
    
    </ul>)

Statistics.propTypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.number.isRequired,
    // positiveFeedbackPercents: propTypes.number.isRequired,
}