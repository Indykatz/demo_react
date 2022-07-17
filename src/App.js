import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Feed from "./pages/feed";
import Profile from "./pages/profile";
import "./App.css";
import { TheApp, Content } from "./styles/app.styled";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  const [user, setUser] = useState();

  return (
    <TheApp>
      
      <BrowserRouter>
      <Header/>
      <Content>
        <Routes>
          <Route path="/" element={<Login setter={setUser} user={user} />} />
          <Route path="/home" element={<Home user={user} setter={setUser} />} />
          <Route path="/feed" element={<Feed user={user} setter={setUser} />} />
          <Route
            path="/profile"
            element={<Profile setter={setUser} user={user} />}
          />
          <Route path="/contest" element={<Contest user={user} setter={setUser}/>} />
        </Routes>
       </Content>
      </BrowserRouter>
       <Footer/>
    </TheApp>
  );
};

export default App;
