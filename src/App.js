import "./App.css";
import Navbar from "./Components/Navbar";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/products/:itemID">
          <ItemDetailContainer />
        </Route>
        <Route path="/products">
          <ItemListContainer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
