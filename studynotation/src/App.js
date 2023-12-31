import { Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"
import { Route } from 'react-router-dom';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useState } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (

    <div className="w-screen h-screen bg-zinc-950 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>

       <Route path="/" element={<Home/>}> </Route>
       <Route path="/login" element = {<Login  setIsLoggedIn = {setIsLoggedIn} />} />
       <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn}/>}></Route>
       <Route path="/dashboard" element={<Dashboard/>}></Route>

      </Routes>
    </div>
   
  );
}

export default App;

// vwhwthwrthw  lovebabbar3@gmail.com
