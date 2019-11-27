import React, { Component } from 'react';
import Navbar from  './components/Navbar/Navbar';
import BookList from './components/BookList';


class App extends Component {
  render() { 
    return (
      <main>
        <Navbar />
        <BookList />
      </main>
    );
  }
}

export default App;
