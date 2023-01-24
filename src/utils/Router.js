import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "../components/Navigation";
import Board from "../views/Board";
import Login from "../views/Login";
import Register from "../views/Register";
import Search from "../views/Search";

const Router = () => (
  <BrowserRouter>
    <Navigation
      pages={[
        {
          label: "Board",
          to: "/board",
        },
        {
          label: "Search",
          to: "/search",
        },
        {
          label: "Login",
          to: "/login",
          pushRight: true,
        },
        {
          label: "Register",
          to: "/register",
        },
      ]}
    />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/board" element={<Board />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
