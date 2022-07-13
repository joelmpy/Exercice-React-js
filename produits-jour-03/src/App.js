import "./App.css";
import Application from "./component/App";
import Title from "./component/Title";
import Aliments from "./component/Aliments";
import Produits from "./component/Produits";
import Personne from "./component/Personne";
import Panier from "./component/Panier";
function App() {
  return (
    <div>
      <div className="App">
      <Title titre = "Bonjour" message = "Bonjour ici le parent de Title"/>
      <Application/>
      </div>
      <div className="App-aliments">
    <Aliments/>
      </div>
      <div className="App-produits">
    <Produits/>
    <Personne/>
    <Panier/>
      </div>
    </div>
  );
}

export default App;
