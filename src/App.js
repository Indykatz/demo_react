// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/login";
// import Home from "./pages/home";
// import Feed from "./pages/feed";
// import Profile from "./pages/profile";
import "./App.css";

const App = () => {
  // const [user, setUser] = useState();

  return (
    <BrowserRouter className="App">
      <Routes>
        {/* element={<Login setter={setUser} user={user} />} */}
        <Route path="/" />
        {/* element={<Home user={user} setter={setUser} />} */}
        <Route path="/home" />
        {/* element={<Feed user={user} setter={setUser} />} */}
        <Route path="/feed" />
        {/* element={<Profile setter={setUser} user={user} />} */}
        <Route path="/profile" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
