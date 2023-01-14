import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./component/SingleProduct";
import { legacy_createStore as createStore } from "redux";
import { reducer } from "./redux/reducer";
import { Provider } from "react-redux";
import Cart from "./component/Cart";

function App() {
  const initialStore = {
    cart: [],
  };
  const store = createStore(reducer, initialStore);

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/products/:id" exact element={<SingleProduct />} />
          <Route path="/cart" exact element={<Cart />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
