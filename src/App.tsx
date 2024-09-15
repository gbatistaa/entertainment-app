import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage } from "./components/Home/Main/MainPage";
import { MoviesGrid } from "./components/Home/Routes/MainGrid/Main/MoviesGrid";
import { TvSeries } from "./components/Home/Routes/TV/TvSeries";
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
          <Route path="/home" element={<MainPage />}>
            <Route path="/home" element={<MoviesGrid />} />
            <Route path="/home/tvseries" element={<TvSeries />} />
            <Route
              path="/home/movies"
              element={
                <div>
                  <h1>Movies</h1>
                </div>
              }
            />
            <Route
              path="/home/bookmarked"
              element={
                <div>
                  <h1>Bookmarked</h1>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
