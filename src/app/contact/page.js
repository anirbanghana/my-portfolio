'use client';
import { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1.5rem;
  background: #f7f8fa;
  min-height: 100vh;
  text-align: center;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const ContactHeading = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin: 2rem 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const FormInput = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border 0.3s;
  
  &:focus {
    border-color: #0070f3;
    outline: none;
  }
`;

const FormTextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
  transition: border 0.3s;

  &:focus {
    border-color: #0070f3;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem;
  background: #0070f3;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: #005bb5;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const FeedbackMessage = styled.p`
  margin-top: 1rem;
  color: green;
`;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dummy submission logic; replace with actual email sending logic.
    console.log('Form Data Submitted:', formData);

    // Simulate successful submission
    setFeedback('Thank you for your message! I will get back to you soon.');

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <ContactContainer id="contact">
      <ContactHeading>Contact Me</ContactHeading>
      <ContactForm onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormTextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
      {feedback && <FeedbackMessage>{feedback}</FeedbackMessage>}
    </ContactContainer>
  );
}
