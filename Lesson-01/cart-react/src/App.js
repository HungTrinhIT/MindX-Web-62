import "./App.css";

import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CartState from "./context/cart/CartState";

function App() {
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
}

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

    Flow 1:
     - Render product list
    
    Flow 2: add product to cart
      - Event onClick ProductComponent
      - function (App) => button Product
      - Logic ...
      - Exist: push quantity
        Not exist: push new product with quantity = 1

      2.1 Increase/ decrease quantity => open cart popup +/-
      2.2 Delete cart item 

    Flow 3:
      - Event onClick on button View Detail
      - function onViewDetailHandler => button View Detail Product component
      - onViewDetailHandler => id => object select => pass props => Product Details

      / => Homepage
      /cart => Cartpage

      hooks: useNavigate()
*/
