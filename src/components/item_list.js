import React, { Component } from 'react';

class ItemList extends Component {
  constructor(props) {
    // grab properties from parent component
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="list-group">
        <div className="list-group-item">
          <h3>Add a New Item</h3>
        </div>

        <div className="list-group-item">
          <h4 className="">Title</h4>
          <input className="form-control" />
        </div>
        <div className="list-group-item">
          <h4>Description</h4>
          <textarea className="form-control" />
        </div>
      </div>
    );
  }
}

export default ItemList;
