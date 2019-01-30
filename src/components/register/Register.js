import React from 'react';
import RegisterForm from './RegisterForm';
import { Redirect } from 'react-router-dom';

import * as actions from 'actions';

export class Register extends React.Component {

  constructor() {
    super();

    this.state = {
      errors: [],
      redirect: false
    }

    this.registerUser = this.registerUser.bind(this);
  }

  registerUser(userData) {
    actions.register(userData).then(
      registered => this.setState({redirect: true}),
      errors => this.setState({errors})
    );
  }

  render() {
    const { errors, redirect } = this.state;

    if (redirect) {
      return <Redirect to={{pathname: '/login', state: { successRegister: true }}} />
    }

    return (
      <section id='register'>
        <div className='bwm-form'>
          <div className='row'>
            <div className='col-md-5'>
              <h1>Regisztráció</h1>
              <h6>Nem kell Tanárnak lenned,hogy Oktass</h6>
              <RegisterForm submitCb={this.registerUser} errors={errors} />
            </div>
            <div className='col-md-6 ml-auto'>
              <div className='image-container'>

                <h2 className='catchphrase'>Regisztrálj és Oktass vagy Keress Oktatót.</h2>

                <img src={process.env.PUBLIC_URL + '/img/class5.jpg'} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
