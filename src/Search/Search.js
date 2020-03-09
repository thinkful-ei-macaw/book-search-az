import React from 'react';
//import Api from './Api';
import './Search.css';

class Search extends React.Component {
  state = {
    printType: 'all',
    filter: 'ebooks'
  }


  /*
  handleSubmit = e => {
    e.preventDefault();
    let query = "q=";
    query += document.querySelector(#query).value;
  }
*/
  render() {
    return (
      <div id="search">
        <form>
          <label for="search">Search: </label>
          <input type="text" />
          <button onClick={(e) => {
            e.preventDefault();
            console.log('O hi there')
          }
          }>Search</button>
          <label for="print-type">Print Type: </label>
          <select>
            <option value="all">All</option>
            <option value="ebook">e-Book</option>
            <option value="physmed">Physical Media</option>
          </select>
          <label for="book-type">Book Type: </label>
          <select>
            <option value="all">All</option>
            <option value="fiction">Fiction</option>
            <option value="nonfic">Non-Fiction</option>
          </select>
        </form>
      </div>
    )
  }
}

export default Search;