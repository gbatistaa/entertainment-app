import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Signup } from "./components/Signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
