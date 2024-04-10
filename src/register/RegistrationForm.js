import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios'


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    matchingPassword: '',
    firstName: '',
    lastName: '',
    birthDay: ''
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true); // Ajout d'un état pour indiquer si les mots de passe correspondent
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // État pour suivre si l'enregistrement a réussi


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setPasswordsMatch(true);  // Réinitialiser l'état des mots de passe correspondants lorsque l'utilisateur modifie le champ de confirmation de mot de passe
    setRegistrationSuccess(false); // Réinitialiser l'état de la réussite de l'enregistrement à false lorsqu'une modification est apportée

  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifier si les mots de passe correspondent
    if (formData.password !== formData.matchingPassword) {
      setPasswordsMatch(false); // Mettre à jour l'état pour indiquer que les mots de passe ne correspondent pas
      return; // Arrêter la soumission du formulaire
    }

    try {
      const response = await axios.post('http://localhost:8080/api/client/register', formData);
      console.log('Inscription réussie :', response.data);
      localStorage.setItem('token', response.data.token);
      setRegistrationSuccess(true);

    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUserName">
        <Form.Label>Nom d'utilisateur</Form.Label>
        <Form.Control
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          placeholder="Entrez le nom d'utilisateur"
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Adresse e-mail</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Entrez l'e-mail"
          required
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Entrez le mot de passe"
          required
        />
      </Form.Group>

      <Form.Group controlId="formMatchingPassword">
        <Form.Label>Confirmer le mot de passe</Form.Label>
        <Form.Control
          type="password"
          name="matchingPassword"
          value={formData.matchingPassword}
          onChange={handleChange}
          placeholder="Confirmez le mot de passe"
          required
          isInvalid={!passwordsMatch} // Marquer le champ comme invalide si les mots de passe ne correspondent pas
        />
        {/* Afficher un message d'erreur si les mots de passe ne correspondent pas */}
        {!passwordsMatch && (
          <Form.Control.Feedback type="invalid">Les mots de passe ne correspondent pas</Form.Control.Feedback>
        )}
      </Form.Group>

      <Form.Group controlId="formFirstName">
        <Form.Label>Prénom</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Entrez le prénom"
          required
        />
      </Form.Group>

      <Form.Group controlId="formLastName">
        <Form.Label>Nom de famille</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Entrez le nom de famille"
          required
        />
      </Form.Group>

      <Form.Group controlId="formBirthDay">
        <Form.Label>Date de naissance</Form.Label>
        <Form.Control
          type="date"
          name="birthDay"
          value={formData.birthDay}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        S'inscrire
      </Button>
      {registrationSuccess && ( // Afficher le message de succès uniquement si l'enregistrement a réussi
        <Alert variant="success">
          Enregistrement terminé avec succès !
        </Alert>
      )}

    </Form>
    
  );
};

export default RegistrationForm;
