import { useState, useEffect } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductList from "./components/ProductList/ProductList";
const initialProduct = [
  {
    id: 1,
    name: "Samsung Galaxy A10",
    price: "40906000",
    img: "assets/img/samsung-galaxy.jpg",
    info: {
      screen: "AMOLED Full HD 9.0",
      os: "Android 9.0",
      frontCamera: "20MP",
      backCamera: "Chính 48MB, phụ 30MP",
    },
    ram: "4 GB",
    rom: "64 GB",
  },
  {
    id: 2,
    name: "IPhone12",
    price: "200306000",
    img: "assets/img/iphone-12.jpg",
    info: {
      screen: "Full HD 12.0",
      os: "IOS 14",
      frontCamera: "20MP",
      backCamera: "Chính 100MB, phụ 30MP",
    },
    ram: "16 GB",
    rom: "32 GB",
  },
  {
    id: 3,
    name: "Xiaomi Note 10",
    price: "10005000",
    img: "assets/img/xiaomi-redmi-note-10-5g.jpg",
    info: {
      screen: "OLED 10.0",
      os: "Android 8.0",
      frontCamera: "69MP",
      backCamera: "Chính 96MB, phụ 30MP",
    },
    ram: "10 GB",
    rom: "64 GB",
  },
];

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Get products from server
  useEffect(() => {
    setProducts(initialProduct);
  }, []);

  return (
    <div className="App">
      <Header />
      <Cart />
      <ProductList />
      <ProductDetail />
    </div>
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
*/
