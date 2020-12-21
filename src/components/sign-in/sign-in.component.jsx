import React from 'react';

import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' })
  }

  onHandleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div class='sign-in' >
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit} >
          <FormInput class='form-input'
            type="email"
            handleChange={this.onHandleChange}
            name='email'
            value={this.state.email}
            label='Email'
            required />

          <FormInput
            class='form-input'
            type="password"
            handleChange={this.onHandleChange}
            name='password'
            value={this.state.password}
            label='Password'
            required />

          <FormInput type="button" value="Submit Form" />
        </form>
      </div>
    )
  }
}
export default SignIn;