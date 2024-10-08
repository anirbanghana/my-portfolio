'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const ContactContainer = styled.section`
  padding: 4rem 1.5rem;
  background: #fff;
  min-height: 100vh;
  text-align: center;
`;

const ContactHeading = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin: 2rem 0;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 500px;
  margin: auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  resize: none;
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  background-color: #0070f3;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;

const Message = styled.p`
  color: ${({ isSuccess }) => (isSuccess ? 'green' : 'red')};
`;

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/xnnqalaz', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData),
    });

    if (response.ok) {
      setSuccessMessage('Your message has been sent successfully!');
      setErrorMessage('');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } else {
      setErrorMessage('Failed to send your message. Please try again later.');
      setSuccessMessage('');
    }
  };

  return (
    <ContactContainer id="contact">
      <ContactHeading>Contact Me</ContactHeading>
      <ContactForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
      {successMessage && <Message isSuccess>{successMessage}</Message>}
      {errorMessage && <Message>{errorMessage}</Message>}
    </ContactContainer>
  );
};

export default Contact;
