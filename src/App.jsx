import Ingredientes from "./components/Ingredientes";
import Midia from "./components/Midia";
import Preparo from "./components/Preparo";

function App() {
  return(
    <div className="App">
      <h1>Chocolate Quente Cremoso</h1>
      <hr />
      <Ingredientes />
      <Preparo />
      <Midia />
    </div>
  )
}

export default App;
