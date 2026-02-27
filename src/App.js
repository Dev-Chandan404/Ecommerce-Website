import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Buy from "./pages/Buy";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Footer from "./pages/Footer";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter basename="/Ecommerce-Website">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="login" element={<Login />} />
          <Route path="buy" element={<Buy />} />
          <Route path="register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
          <Route path="*" element={<Footer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
