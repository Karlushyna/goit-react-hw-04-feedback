import propTypes from "prop-types";

import styles from "./notification.module.css";

export const Notification = ({ message }) => <p className={styles.message}>{message}</p>;

Notification.propTypes = {
  message: propTypes.string.isRequired,
};