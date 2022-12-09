import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Header from "./layouts/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import "./App.css";
import SignupPage from "./pages/SignupPage/SignupPage";
import AuthState from "./contexts/AuthContext/AuthState";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {
  return (
    <AuthState>
      <HelmetProvider>
        <Router>
          <div className="app">
            <Header />
            <Routes>
              <Route path="/" element={<PrivateRoute component={HomePage} />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<SignupPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </Router>
      </HelmetProvider>
    </AuthState>
  );
};

export default App;
