import "./App.css";
import  Navbar  from "./components/Navbar/Navbar";
import './App.css'
import { Route, Routes } from "react-router-dom";
import { History, Home, Liked, Playlist, WatchLater } from "./pages";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
       <Route path="/" element={<Home/>}/> 
       <Route path="/" element={<Home/>}/> 
       <Route path="/login" element={<Login/>}/> 
       <Route path="/signup" element={<Signup/>}/> 
       <Route path="/playlist" element={<Playlist/>}/> 
       <Route path="/liked" element={<Liked/>}/> 
       <Route path="/watchlater" element={<WatchLater/>}/> 
       <Route path="/history" element={<History/>}/> 
      </Routes>
    </div>
  );
}

export default App;
