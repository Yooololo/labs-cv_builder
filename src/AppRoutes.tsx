import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Curriculum from "./Components/Curriculum";
import UserForm from "./Components/UserForm";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/curriculum" element={<Curriculum />} />
      <Route path="/user-form" element={<UserForm />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
