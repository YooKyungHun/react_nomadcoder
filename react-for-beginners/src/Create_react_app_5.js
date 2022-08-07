import Button from "./Button";
import styles from "./App.module.css"

function CssApp() {
  return (
    <div>
      <h1 className={styles.title}> Welcome back! </h1>
      <Button text={"Continue"}/>
    </div>
  );
}

export default CssApp;
