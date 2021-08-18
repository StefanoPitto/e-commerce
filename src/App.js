import "./App.css";
import Navbar from "./Components/Navbar";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Home from "./Components/Home";
import CartContextProvider from "./Components/CartContextProvider";
import AuthContextProvider from "./Components/AuthContextProvider";
import Cart from "./Components/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BuyerForm from "./Components/BuyerForm";
import Orders from "./Components/Orders";
import Auth from "./Components/Auth";

const theme = createTheme({
	palette: {
		primary: {
			main: "#000000",
		},
		secondary: {
			main: "#ffffff",
		},
		success: {
			main: "#53d133",
		},
	},
});

const App = () => {
	return (
		<CartContextProvider>
			<AuthContextProvider>
				<ThemeProvider theme={theme}>
					<Router>
						<Switch>
							<Route exact path="/finalizar-compra">
								<BuyerForm />
							</Route>
							<Route exact path="/">
								<Home />
							</Route>
							<Route>
								<Navbar />
								<Switch>
									<Route exact path="/products/:categoryID">
										<ItemListContainer />
									</Route>
									<Route exact path="/products/:categoryID/item/:itemID">
										<ItemDetailContainer />
									</Route>
									<Route exact path="/cart">
										<Cart />
									</Route>
									<Route exact path="/orders">
										<Orders />
									</Route>
									<Route exact path="/login-sign-up">
										<Auth />
									</Route>
									<Route>
										<Home />
									</Route>
								</Switch>
							</Route>
						</Switch>
					</Router>
				</ThemeProvider>
			</AuthContextProvider>
		</CartContextProvider>
	);
};

export default App;
