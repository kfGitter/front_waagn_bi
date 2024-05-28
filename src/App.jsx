import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/404";
import Navbar from "./components/Navbar";
import AppContext from "./context";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login";
import Signup from './pages/Signup';
import FoodScience from "./pages/FoodScience";
import Astuces from "./pages/Astuces";

function App() {
  return (
    <Router>
      <AppContext>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/astuces" element={<Astuces />} />
          <Route path="/food-science" element={<FoodScience />} />
        </Routes>
      </AppContext>
    </Router>
  );
}

export default App;
