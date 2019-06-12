import React from 'react';
// import logo from './logo.svg';
import './App.css';
import PersonList from './Components/PersonList'
import Quiz from './Components/Quiz'
import Header from './Components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Router>
            <Route path={`/`} component = {Header}/>
            <Route path={`/PersonList`} component = {PersonList}/>
            <Route path="/Quiz" component={Quiz}/>
        </Router>
    </div>
  );
}

export default App;
