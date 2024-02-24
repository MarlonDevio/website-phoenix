// Write a functional form component
import './Form.scss';
import { useState } from 'react';
import Validator from '../../helpers/Validator';
import StyledButton from '../StyledComponents/StyledButton';

const Form = () => {
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [firstName, setFirstName] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { id, value } = e.target;
    id === 'firstName' ? setFirstName(value) : '';
    id === 'lastName' ? setLastname(value) : '';
    id === 'email' ? setEmail(value) : '';
    id === 'phone' ? setPhone(value) : '';
    id === 'message' ? setMessage(value) : '';
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      className='contact__form flex--column'
      onSubmit={handleSubmit}
    >
      <h4>Feel Free to Contact Me!</h4>
      <div className='control__el__container'>
        <p
          className={
            Validator.isCorrectName(firstName).condition ? 'valid' : 'invalid'
          }
        >
          First Name is {Validator.isCorrectName(firstName).message}
        </p>
        <p
          className={
            Validator.isCorrectName(lastName).condition ? 'valid' : 'invalid'
          }
        >
          Last Name is {Validator.isCorrectName(lastName).message}
        </p>
        <p className={Validator.isEmail(email) ? 'valid' : 'invalid'}>
          E-mail is {Validator.isEmail(email) ? 'correct' : 'incorrect'}
        </p>
        <p className={Validator.isMoreThanTen(message) ? 'valid' : 'invalid'}>
          Message{' '}
          {Validator.isMoreThanTen(message)
            ? 'valid'
            : 'should be at least 10 characters long.'}
        </p>
      </div>
      <label htmlFor='firstName'>Name:</label>
      <input
        type='text'
        id='firstName'
        required
        onChange={handleChange}
      />

      <label htmlFor='lastName'>Last Name:</label>
      <input
        type='text'
        id='lastName'
        required
        onChange={handleChange}
      />

      <label htmlFor='email'>Email Address:</label>
      <input
        type='email'
        id='email'
        required
        onChange={handleChange}
      />

      <label htmlFor='phone'>Phone Number:</label>
      <input
        type='tel'
        id='phone'
      />

      <label htmlFor='message'>Message:</label>
      <textarea
        onChange={handleChange}
        id='message'
      />

      <StyledButton type='submit'>Submit Form</StyledButton>
    </form>
  );
};

export default Form;
