import React, { Component } from 'react';
import SearchBar from './search_bar';
import ItemList from './item_list';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <ItemList />
      </div>
    );
  }
}
