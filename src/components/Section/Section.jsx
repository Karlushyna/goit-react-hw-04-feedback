import propTypes from "prop-types";

import styles from "./section.module.css";

export const Section = ({ title, children }) => (
    <div>
        <h2 className={styles.title}>{title}</h2>
        {children}  
    </div>
);

Section.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.node.isRequired,
};
