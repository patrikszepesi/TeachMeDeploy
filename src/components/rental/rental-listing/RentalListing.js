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
        <h1 className="page-title">Böngéssz, Válassz majd Értékeld az Oktatódat</h1>
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
