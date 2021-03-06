import React from 'react';
import { withRouter } from 'react-router-dom';

class HouesSearchInput extends React.Component {

  constructor() {
    super();

    this.searchInput = React.createRef();
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  }

  handleSearch() {
    const { history } = this.props;
    const city = this.searchInput.current.value;

    city ? history.push(`/houses/${city}/homes`) : history.push('/houses');
  }


  render() {
    return (
      <div className='form-inline my-2 my-lg-0'>
        <input onKeyPress={(event) => { this.handleKeyPress(event)}}
               ref={this.searchInput}
               className='form-control mr-sm-2 bwm-search'
               type='search'
               placeholder='Tantárgy Hivatalos neve'
               aria-label='Search'></input>
        <button onClick={() => {this.handleSearch()}}
                className='btn btn-outline-success my-2 my-sm-0 btn-bwm-search'
                type='submit'>Keresés</button>
      </div>
    )
  }
}


export default withRouter(HouseSearchInput)
