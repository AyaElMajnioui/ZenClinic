import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import SignUp from './Sign_Up';
import Login from './Login';
import './App.css';
import FindDoctorSearch from './FindDoctorSearch';
import InstantConsultation from './InstantConsultation';
import GiveReviews from './GiveReviews';
import ProfileCard from './ProfileCard';
import Home from './Home';

function App() {
  return (
    <div className="App">
        {/* BrowserRouter permet de gérer l'historique de navigation */}
        <BrowserRouter>
          {/* La Navbar s'affichera sur toutes les pages */}
          <Navbar />
          
          <Routes>
            {/* Route pour la page d'accueil (tu peux créer un composant Landing plus tard) */}
            <Route path="/" element={<Home/>} />
            
            {/* Route pour l'inscription */}
            <Route path="/signup" element={<SignUp />} />
            
            {/* Route pour la connexion */}
            <Route path="/login" element={<Login />} />
            <Route path="/find-doctor" element={<FindDoctorSearch />} />
            <Route path="/instant-consultation" element={<InstantConsultation />} />
            <Route path="/reviews" element={<GiveReviews />} />
            <Route path="/profile" element={<ProfileCard />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;