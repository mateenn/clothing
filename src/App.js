import React, { Component } from 'react';
//import logo from './logo.svg';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component
{
  constructor()
  {
    super();
    this.state =
    {
      monsters: [
        /*
        {
          name: 'benshee',
          age: '2',
          id: 'k1'
        },
        {
          name: 'devil',
          age: '3',
          id: 'k2',
        },
        {
          name: 'arrow',
          age: '4',
          id: 'k3'
        }
        */
      ],
      searchField: ''
    };
  }  
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }
  render()
  {
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase(). includes(searchField.toLowerCase())
      )
  return (
    <div className="App">

      <seachBox
       placeholder = 'Search Monsters' 
       handleChange = {e => this.setState({searchField: e.target.value })}

      />
      <CardList monsters={filteredMonsters} />

        

    </div>
  );
}
}

export default App;
