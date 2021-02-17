import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore(); // now store becomes available

class App extends Component {

  render() {
    return (
      <Provider store={store} >
      {/* provider takes in 1 attribute where we supply the store that 
      we've created outside class App 
      Doing this makes React Store become available to all the components 
      within our react application*/}
        <BrowserRouter>
          <div>
            <Main/>  
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;


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

