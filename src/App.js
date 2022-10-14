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
import { useAuth } from "./context/Auth/AuthContext";
import LoggedIn from "./pages/LoggedIn/LoggedIn";
import { PlaylistModal } from "./components/PlaylistModal/PlaylistModal";
import { PlaylistVideos } from "./pages/Playlist/PlaylistVideos";
import { useData } from "./context/Video/VideoContext";
import { Loader } from "./components/Loader/Loader";

function App() {
  const {loader} = useData();
  const {authState} = useAuth();
  return (
    <div className="App">
      <PlaylistModal/>
      <Navbar></Navbar>
      {/* {loader && <Loader/>} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:videoId" element={<SingleVideo />} />
        {authState.token && 
        <Route path="/login" element={<LoggedIn />} />
        }
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
          path="/playlist/:playListId"
          element={
            <RequiresAuth>
              <PlaylistVideos />
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
