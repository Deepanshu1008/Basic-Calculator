import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButttonClick = (buttonText) => {
    if (buttonText === "C") 
    {
      setCalVal("");
    } 
    else if (buttonText === "=")
    {
     const result = eval(calVal);
     setCalVal(result);
    } 
    else
     {
      const newDPV= calVal + buttonText;
      setCalVal(newDPV);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal}></Display>
      <ButtonsContainer onButtonClick={onButttonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
