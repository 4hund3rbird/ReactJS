import styles from "./Button.module.css";
const Button = ({ children, type, onclick }) => {
  return (
    <div className={`${styles.btn} ${styles[type]}`} onClick={onclick}>
      {children}
    </div>
  );
};

export default Button;
