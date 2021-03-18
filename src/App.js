import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider, provider } from 'react-redux';
import { configureStore } from '.redux/configureStore';
import './App.css';

const store = ConfigureStore();


class App extends Component {
 
  render() {
      return (
        <Provider store = {store}> 
        <BrowserRouter>
            <div className="App">
                <Main />
            </div>
        </BrowserRouter>
        </Provider>
      );
  };
}

export default App;
