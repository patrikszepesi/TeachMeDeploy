import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class About extends React.Component {

  constructor() {
    super()

    this.loginUser = this.loginUser.bind(this);
  }

  loginUser(userData) {
    this.props.dispatch(actions.login(userData));
  }

  render() {


    return (
      <section id="about">
        <div className="bwm-form">
          <div className="row">
            <div className="col-md-5">
              <h1>Segítség itt van</h1>


            </div>
            <div className="col-md-6 ml-auto">
              <div className="image-container">
                <h2 className="catchphrase">Lépj be és Taníts vagy Keress Oktatót.</h2>
                <img src={process.env.PUBLIC_URL + '/img/class4.jpg'} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(About)
