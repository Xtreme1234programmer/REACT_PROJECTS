
import './App.css'
import styles from './App.module.css'
import { ButtonsContainer } from './components/ButtonsContainer'
import { Display } from './components/Display'
import { useState } from "react";

function App() {
  const [calVal,setCalVal]=useState("");
  const onButtonClick=(buttonText)=>
    {
      console.log(buttonText)
      if(buttonText==='=')
        {
         const result=eval(calVal);
         setCalVal(result);
        }
        else if(buttonText==='C')
        {
          setCalVal("");
        }
      else{
        const newDisplayValue=calVal+buttonText;
        setCalVal(newDisplayValue);
      }
    }
 
  return (
    <div className={styles.calculator}>
   <Display displayValue={calVal}></Display>
    <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
    
  )
}

export default App
