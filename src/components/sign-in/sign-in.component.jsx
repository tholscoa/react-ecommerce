import React from 'react';

import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {email, password}= this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email:'', password:''});
    } catch (error) {
      console.log(error)
    }

    this.setState({ email: '', password: '' })
  }

  onHandleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in' >
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit} >
          <FormInput className='form-input'
            type="email"
            handleChange={this.onHandleChange}
            name='email'
            value={this.state.email}
            label='Email'
            required />

          <FormInput
            className='form-input'
            type="password"
            handleChange={this.onHandleChange}
            name='password'
            value={this.state.password}
            label='Password'
            required />

          <div className='buttons'>
          <CustomButton onClick= {this.handleSubmit} type='button'>Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isgooglesignin>Sign in with google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
export default SignIn;