import React, { Component } from 'react';


class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSignUp = async (event) => {
    event.preventDefault();

    // You can use Axios or the fetch API to send a POST request to your Django backend for user registration.
    const { username, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      this.setState({ error: "Passwords don't match" });
      return;
    }

    const data = { username, email, password };

    try {
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.status === 201) {
        // Registration successful, you can redirect the user or show a success message.
      } else {
        // Registration failed, display an error message to the user.
        this.setState({ error: 'Registration failed' });
      }
    } catch (error) {
      // Handle network errors or other issues here.
      console.error('Sign-up error:', error);
    }
  }

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSignUp}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleInputChange}
              required
            />
          </div>
          {this.state.error && <p className="error">{this.state.error}</p>}
          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpPage;
