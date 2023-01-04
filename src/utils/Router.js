import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "../views/Board";
import Login from "../views/Login";
import Register from "../views/Register";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/board" element={<Board />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
