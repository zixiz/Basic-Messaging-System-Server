import React, { Component } from 'react';
import { Button, Form} from 'react-bootstrap';

class Register extends Component {
    render() {
      return (
        <Form>
        <h3>Sign Up</h3>
        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Full Name" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      );
    }
  }
  
  export default Register;