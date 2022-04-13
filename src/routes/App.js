import logo from "../logo.svg";
import "../App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage, NotFoundPage } from "../pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/registrasi" element={<Registrasi />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
