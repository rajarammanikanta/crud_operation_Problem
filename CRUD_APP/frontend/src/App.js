// App.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/pages/Home';
import AddEdit from './components/pages/AddEdit';
import View from './components/pages/View';
import About from './components/pages/About';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
      <Header />
        <ToastContainer position='top-center'/>
     
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddEdit} />
          <Route  path="/update/:id" component={AddEdit} />
          <Route  path="/view/:id" component={View} />
          <Route  path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
