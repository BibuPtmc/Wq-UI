import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // État pour suivre si l'utilisateur est connecté

  const handleLogin = () => {
    // Logique de connexion
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Logique de déconnexion
    setIsLoggedIn(false);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/contact">Contactez-nous</Nav.Link>
          <Nav.Link href="#report">Signaler un chat perdu ou trouvé</Nav.Link>
          <Nav.Link href="#lost">Chat perdu</Nav.Link>
          <Nav.Link href="#found">Chat trouvé</Nav.Link>
          <Nav.Link href="#profile">Espace perso</Nav.Link>
        </Nav>
        <Nav>
          {isLoggedIn ? (
            <Button variant="outline-primary" onClick={handleLogout}>Logout</Button>
          ) : (
            <>
              <Button variant="outline-primary" href="#login">Login</Button>
              <Button variant="primary" href="/register" className="ml-2">Signup</Button> {/* Ajoutez la classe ml-2 ici */}
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
