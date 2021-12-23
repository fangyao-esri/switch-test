import logo from './logo.svg';
import './App.css';
import '@esri/calcite-components/dist/calcite/calcite.css';
import { CalciteSwitch, CalciteButton } from '@esri/calcite-components-react';
import {useState} from "react";



function App() {
  const [test, setTest] = useState(true);

  const onTestButtonClick = () =>{
    setTest(!test);
  };

  return (
    <div>
      <CalciteSwitch checked={true}></CalciteSwitch>
      <CalciteButton onClick={onTestButtonClick}>Test</CalciteButton>

    </div>



  );
}

export default App;
