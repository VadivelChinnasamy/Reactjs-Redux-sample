import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HomePage from './components/HomePage'
import { Provider } from 'react-redux';
import Reducer from './components/Reducer'
import {createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import SecondPage from './components/SecondPage'

const store=createStore(Reducer,applyMiddleware(thunk));

//IMPORTANT THINGS******this will print the initial state and Returing state.******
//this used for monitor state values, it will work if you remove it. just monitoring purpose
store.subscribe( () => {
    console.log('******STATE*****\n', store.getState());   
  });
  
  const routing = (
  <Router>     
      <div>
            <Route path="/"  component={HomePage}  /> 
            <Route path="/home"  component={HomePage}  /> 
            <Route path="/secondpage"  component={SecondPage} />
      </div>   
  </Router>
 )

ReactDOM.render(<Provider store={store}>{routing}</Provider>, document.getElementById('root'));

//ReactDOM.render(<Provider store={store}><ReduxSimple/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
