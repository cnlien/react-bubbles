import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import {Navbar, Nav, NavItem} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './components.scss';


const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState('');

  useEffect(()=>{
    if(localStorage.getItem('token')) {
      setLoggedIn(true);
    }
  },[])

  const handleLogout = e => {
    localStorage.removeItem('token')
    setLoggedIn(false);
  }

  return (
    <Navbar>
        <Nav>
          <NavItem>
              {!loggedIn ? <Link to="/">Login</Link> : <Link to="/" onClick={handleLogout}>Logout</Link>}
          </NavItem>

          <NavItem>
            {loggedIn ? <Link to='/bubbles-page'>Bubbles</Link> : <Link to="/"></Link>}
          </NavItem>

          <NavItem>
            {loggedIn ? <Link to='/sprint-answers'>Sprint Answers</Link> : <Link to="/"></Link>}
          </NavItem>
        </Nav>
    </Navbar>
  )
}

export default Navigation;