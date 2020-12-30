import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';
import { auth, createUserAuthProfile } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {displayName, email, password, confirmPassword}= this.state;

    if(password !== confirmPassword){
      alert("password don't match");
      return; 
    }

    try{
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
 
      await createUserAuthProfile(user, {displayName});

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    }catch(error){
      console.error(error);
    }
  };

  onHandleChange= (event) =>{
    const {value, name} = event.target;
    this.setState({[name]:value})
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I don't have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit} className='sign-up-form'>
          <FormInput className='form-input'
            type="text"
            handleChange={this.onHandleChange}
            name='displayName'
            value={displayName}
            label='display name'
            required
          />

          <FormInput className='form-input'
            type="email"
            handleChange={this.onHandleChange}
            name='email'
            value={email}
            label='email'
            required
          />

          <FormInput className='form-input'
            type="password"
            handleChange={this.onHandleChange}
            name='password'
            value={password}
            label='password'
            required
          />

          <FormInput className='form-input'
            type="password"
            handleChange={this.onHandleChange}
            name='confirmPassword'
            value={confirmPassword}
            label='confirm password'
            required
          />

          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>


      </div>
    )
  }
}

export default SignUp; 