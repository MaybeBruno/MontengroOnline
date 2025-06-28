import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout      from '../components/layout';

import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Location from "../pages/location";
import Menu from "../pages/menu";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index        element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register"  element={<Register />} />
        <Route path="location"  element={<Location />} />
        <Route path="menu"  element={<Menu />} />
      </Route>
    </Routes>
  </BrowserRouter>

);

export default AppRouter;