// import logo from './logo.svg';
// import './App.css';

import Button from "./Button";
import styles from './App.module.css';

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={'hello i am button.'}/>
      <Button/>
    </div>
  );
}

export default App;
