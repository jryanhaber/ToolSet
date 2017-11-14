import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="list-group-item">
        <h4 className="list-group-item-heading">Search Here</h4>
        <p className="list-group-item-heading">Type something here to search</p>
        <input
          value={this.state.term}
          className="form-control"
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }
}

export default SearchBar;
