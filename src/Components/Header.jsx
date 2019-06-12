import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';


export default class Header extends Component {
    render () {
        return(
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <ul className="navbar-header">
                            <li className="navbar-brand">MySimpsons</li>
                        </ul>
    
                        <ul className="nav navbar-nav">
                            <li><NavLink to="/PersonList">Person List</NavLink></li>
                        </ul>
    
                        <ul className="nav navbar-nav navbar-right">
                            <li> <NavLink to="/Quiz">My Quiz</NavLink></li>
                        </ul>
    
                    </div>
                </nav>
            </div>
        )
    }  
}
  
  