import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Detail from './components/Detail';
import Login from './components/Login';
import { ToastContainer} from 'react-toastify';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Header />
         <Switch>
             <Route exact path='/' component={Home}/>
             <Route exact path='/detail/:id_' component={Detail}/>
             <Route exact path='/login' component={Login} />
         </Switch>
      </BrowserRouter>
      <ToastContainer />
        
    </div>
  );
}

export default App;
