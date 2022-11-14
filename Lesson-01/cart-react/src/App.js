import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CartState from "./context/cart/CartState";

import "./App.css";

const App = () => {
  return (
    <Router>
      <CartState>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </CartState>
    </Router>
  );
};

export default App;

/*
  App
    Header
    Cart
    ProductList
        Product
        Product
        Product
    ProductDetail
*/
