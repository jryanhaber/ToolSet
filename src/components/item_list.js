import React, { Component } from 'react';

class ItemList extends Component {
  constructor(props) {
    // grab properties from parent component
    super(props);
    this.state = {
      new_item_title: '',
      new_item_description: '',
    };
  }

  render() {
    return (
      <div className="list-group">
        <div className="list-group-item">
          <h3>Add a New Item</h3>
        </div>
        <div className="list-group-item">
          <h4 className="">Title</h4>
          <input
            id="title"
            className="form-control"
            onChange={event =>
              this.setState({ new_item_title: event.target.value })}
          />
        </div>
        <div className="list-group-item">
          <h4>Description</h4>
          <textarea
            id="description"
            className="form-control"
            onChange={event =>
              this.setState({ new_item_description: event.target.value })}
          />
        </div>
        <div className="list-group-item">
          <button className="btn btn-primary btn-block">Add it Now</button>
        </div>
        <div className="list-group-item col-md-4">
          <div>
            <h4>{this.state.new_item_title}</h4>
          </div>

          <div>
            <p>{this.state.new_item_description}</p>
          </div>
        </div>
      </div>
    );
  }

  create_new_task(event) {
    let event_title = $('#title').val();
    let event_description = $('#description').val();
    console.log('this is what I got');
    console.log(event_title);
    console.log(event_description);
  }
}

export default ItemList;
