import styles from "./ButtonsContainer.module.css";

const buttonNames = [
  "c",
  "1",
  "2",
  "+",
  "3",
  "4",
  "-",
  "5",
  "6",
  "*",
  "7",
  "8",
  "/",
  "=",
  "9",
  "0",
  ".",
];
// 4:50:46

const ButtonsContainer = () => {
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((button) => (
        <button className={styles.button}>{button}</button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
