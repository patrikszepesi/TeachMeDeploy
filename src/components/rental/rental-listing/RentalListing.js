import React from 'react';
import { RentalList } from './RentalList';
import { connect } from 'react-redux';

import * as actions from 'actions';


class RentalListing extends React.Component {

  componentWillMount() {
    this.props.dispatch(actions.fetchRentals());
  }

  render() {
    return (
      <section id="rentalListing">
        <h1 className="page-title">Regisztrálj ha Oktatnál vagy épp Oktatót Keresel</h1>
          <h5>Nem kell Tanárnak lenned, hogy Taníts</h5>
          <hr/>
        <RentalList rentals={this.props.rentals} />
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    rentals: state.rentals.data
  }
}

export default connect(mapStateToProps)(RentalListing)
