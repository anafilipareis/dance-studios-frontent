
import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import IsPrivate from "./components/isPrivate";
import IsAnon from "./components/isAnon";
import HomePage from "./pages/HomePage";
import DanceClassesPage from "./pages/DanceClassesPage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import DanceClassDetailsPage from "./pages/DanceClassDetailsPage";




function App() {

  return (
    
    <div className="App">
      <NavBar />
      
      <Routes>      
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/dance-classes" element={<DanceClassesPage />} />
        <Route exact path="/dance-classes/class/:id" element={<DanceClassDetailsPage />} />
        <Route exact path="/profile" element={<IsPrivate><ProfilePage /></IsPrivate>} />
        <Route exact path="/signup" element={<IsAnon><SignupPage /></IsAnon>} /> 
        <Route exact path="/login" element={<IsAnon><LoginPage /></IsAnon>}/>       
      </Routes>
    </div>
    
  );
}

export default App;