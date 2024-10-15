import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Services from "./Pages/Services";
import SignUP from "./Pages/SignUP";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/products" exact element={<Product />}></Route>
          <Route path="/services" exact element={<Services />}></Route>
          <Route path="/sign-up" exact element={<SignUP />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
