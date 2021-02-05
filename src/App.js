import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {
  //we need to define the state in here, thats why we add constructor
  //in order to store the state u need to define the state in the constructor of the class component

  constructor(props) {
    super(props);

    this.state = {      //define state here
      dishes: DISHES    //js object (dishes): DISHES that we've just imported
    };
  }
  //after lifting this state^ into the App.js file , we can make those dishes available as props to the Menu Component

  render() {
    return (
      // <div className="App"> because we removed App.css (dont want them to be centered)
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        {/*This way, Menu component will be rendered below navbar*/}
        <Menu dishes={this.state.dishes}/>       
        {/*Making dishes available as props
        this way the dishes that are defined in the state for the App component is now made available as props to menu component. 
        So, can go into my menu component, and this dishes information becomes available into menu component*/}
      </div>
    );
  }
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
