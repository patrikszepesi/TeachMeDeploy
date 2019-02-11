import React from 'react';
import RegisterForm from './RegisterForm';
import { Redirect } from 'react-router-dom';
//

import * as actions from 'actions';

export class Register extends React.Component {

  constructor() {
    super();

    this.state = {
      errors: [],
      redirect: false
    }

    this.role = ['Egyetemi Tanár', 'Főiskolai Tanár','Középiskolai Tanár','Phd Hallgató', 'Teljes Állásban dolgozó','Gyakornok','Egyetemi Demonstrátor','Harmadéves Hallgató','Másodéves Hallgató','Elsőéves Hallgató','Középiskolai Diák','Egyéb']

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
              <h6>Nem kell tanárnak lenned,hogy taníts!</h6>
                <h6>A használat INGYENES minden felhasználó részére</h6>
              <RegisterForm submitCb={this.registerUser} errors={errors} options={this.role} />
            </div>
            <div className='col-md-6 ml-auto'>
              <div className='image-container'>

                <h2 className='catchphrase'>Regisztrálj és Taníts vagy Tanulj </h2>

                <img src={process.env.PUBLIC_URL + '/img/class5.jpg'} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
