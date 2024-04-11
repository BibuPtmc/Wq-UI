
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importez également Routes
import RegistrationForm from './register/RegistrationForm';
import HomePage from './HomePage';
import { ContactUs } from './ContactPage';
import 'bootstrap/dist/css/bootstrap.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <Routes> {/* Remplacez Route par Routes */}
      <Route exact path="/" element={<ContactUs />} /> {/* Utilisez l'attribut element pour spécifier le composant */}
      <Route path="/register" element={<RegistrationForm />} />
    </Routes>
  </Router>
);
