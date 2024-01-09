import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonsContainer from "./Components/ButtonsContainer";

function App() {
  // 4:46:41
  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonsContainer/>
    </div>
  );
}

export default App;
