import "./App.css";
import { Navbar } from "./Components/Navbar";
import { ItemListContainer } from "./Components/ItemListContainer";
export const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer info={"Bienvenidos a mi E-commerce"} />
    </div>
  );
};

export default App;
