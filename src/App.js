/*import logo from './logo.svg';
import './App.css';*/
import { AlertButton } from "./components/Alertas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AlertButton 
        high= "20px"
        colorF = "black"
        width ="120px"
        TextColor="white"

        Alert = "Alerta Predeterminada"
         ></AlertButton>


        <AlertButton 
        high= "20px"
        colorF = "purple"
        width ="120px"
        TextColor="black"
        Alert = "Alerta Exitosa"
        icono = ""
         ></AlertButton>
        
        
      </header>
    </div>
  );
}

export default App;
