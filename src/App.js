/*import logo from './logo.svg';
import './App.css';*/
import { AlertButton } from "./components/Alertas";
import {Avatar} from "./components/Avatar" ;


function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <AlertButton high= "200px"colorF = "black"width ="500px" TextColor="white" Alert = "Alerta Predeterminada"
        ></AlertButton>


        <AlertButton high= "200px" colorF = "purple" width ="500px" TextColor="black" Alert = "Alerta Exitosa"
        ></AlertButton>

         <Avatar 
         imagen= " 500px"
         altura="100px"
         width="100px"
  > Karen Herrera</Avatar>
      </header>
    </div>
  );
  
}

export default App;
