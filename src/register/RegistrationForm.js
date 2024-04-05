import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import api from '../hooks/api';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    birthDay: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/client/register', formData);
      console.log('Inscription réussie :', response.data);
      localStorage.setItem('token', response.data.token);
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

      <Form.Group controlId="formConfirmPassword">
        <Form.Label>Confirmer le mot de passe</Form.Label>
        <Form.Control
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirmez le mot de passe"
          required
        />
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

      <Button variant="primary" type="submit">
        S'inscrire
      </Button>
    </Form>
  );
};

export default RegistrationForm;
