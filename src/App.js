import React, { Component } from 'react';
import Api from './Api';
import Results from './Results/Results';
import Search from './Search/Search';
import './App.css';

class App extends Component {
state = {
  
}



render() {
  return (
    <main className="App">
      <header>
        <h1 id="top">Google Book Search</h1>
      </header>
      <div className='Search'>
        <Search />
      </div>
      <div className='Results'>
        <Results />
      </div>
    <footer>
      <p>Zac and Aggy's Book Search</p>
    </footer>
    </main>
  );
}

}

export default App;
