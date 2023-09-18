// App.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import AddEdit from './components/pages/AddEdit';
import View from './components/pages/View';
import About from './components/pages/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
  
      <div className='App'>
        <ToastContainer position='top-center'/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddEdit} />
          <Route  exact path="/update/:id" component={AddEdit} />
          <Route exact path="/view/:id" component={View} />
          <Route  exact path="/about" component={About} />
        </Switch>
      </div>
  );
}

export default App;
