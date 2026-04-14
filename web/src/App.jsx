import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import MyItems from "./pages/MyItemsPage/MyItems";
import Alerts from "./pages/AlertsPage/Alerts";
import Login from "./pages/LoginPage/Login";
import Registration from "./pages/RegistrationPage/Registration";
import AddItem from "./pages/AddItemPage/AddItem";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-items" element={<MyItems />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/add-item" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  );
}