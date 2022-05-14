import "./App.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import {
  History,
  Home,
  Liked,
  Playlist,
  SingleVideo,
  WatchLater,
} from "./pages";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import { Navbar } from "./components/Navbar/Navbar";
import { RequiresAuth } from "./RequiresAuth";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/video" element={<SingleVideo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/playlist"
          element={
            <RequiresAuth>
              <Playlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/liked"
          element={
            <RequiresAuth>
              <Liked />
            </RequiresAuth>
          }
        />
        <Route
          path="/watchlater"
          element={
            <RequiresAuth>
              <WatchLater />
            </RequiresAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RequiresAuth>
              <History />
            </RequiresAuth>
          }
        />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
