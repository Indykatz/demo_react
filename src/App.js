import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Feed from "./pages/feed";
import Profile from "./pages/profile";
import "./App.css";
import { TheApp } from "./styles/app.styled";

const App = () => {
  const [user, setUser] = useState();

  return (
    <TheApp>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setter={setUser} user={user} />} />
          <Route path="/home" element={<Home user={user} setter={setUser} />} />
          <Route path="/feed" element={<Feed user={user} setter={setUser} />} />
          <Route
            path="/profile"
            element={<Profile setter={setUser} user={user} />}
          />
        </Routes>
      </BrowserRouter>
    </TheApp>
  );
};

export default App;
