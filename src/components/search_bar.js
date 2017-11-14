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
          className="form-control"
          onChange={event => console.log(event.target.value)}
        />
      </div>
    );
  }
}

export default SearchBar;
