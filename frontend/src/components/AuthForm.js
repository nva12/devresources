import React from 'react';
import { Form, Button } from 'react-bootstrap';

const AuthForm = ({ variant }) => {
  return (
    <Form>
      {variant === 'signup' && (
        <Form.Group controlId='authForm.ControlName'>
          <Form.Label>Name</Form.Label>
          <Form.Control type='text' placeholder='Enter your name' />
        </Form.Group>
      )}

      <Form.Group controlId='authForm.ControlEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter your email' />
        {variant === 'signup' && (
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group controlId='authForm.ControlPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>

      {variant === 'signup' && (
        <Form.Group controlId='authForm.ControlConfirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type='password' placeholder='Confirm your password' />
        </Form.Group>
      )}

      <Button variant='primary' type='submit'>
        {variant === 'signup' ? `Sign Up` : `Sign In`}
      </Button>
    </Form>
  );
};

export default AuthForm;
