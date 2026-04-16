import { Route, Routes } from "react-router-dom";
import "./app.css";
import Navbar from "./component/Navbar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Album from "./pages/Album";
import Commnet from "./pages/Commnet";
import Photos from "./pages/Photos";
import Post from "./pages/Post";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/albums" element={<Album />} />
        <Route path="/comments" element={<Commnet />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/posts" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
