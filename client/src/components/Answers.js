import React, { useState } from 'react';

import { Container, Button, Fade, ListGroup, ListGroupItem } from 'reactstrap';

import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.css';
import './components.scss'

const Answers = (props) => {

  const [fadeIn, setFadeIn] = useState(false);

  const toggle=()=>setFadeIn(!fadeIn);

  return(
    <Container className='sprint-answers'>
      <Navigation/>
      <ListGroup>
        <ListGroupItem>
          <h3>Explain what a token is used for.</h3>
          <Fade in={fadeIn} tag="p" className="mt-3">
            A token is a string that can be added to localStorage to access items in a Private Route
          </Fade>
        </ListGroupItem>

        <ListGroupItem>
          <h3>What steps can you take in your web apps to keep your data secure?</h3>
          <Fade in={fadeIn} tag="p" className="mt-3">
            On the front-end side you can add information inside of Private Routes so that that information is only accessible to individuals with a token. Require stronger passwords and the ability to revoke the token after a session expires.
          </Fade>

        </ListGroupItem>

        <ListGroupItem>
          <h3>Describe how web servers work.</h3>
          <Fade in={fadeIn} tag="p" className="mt-3">
            Web servers provide a location to store and manage the files that displayed by the browser. The files are requested through a web browser and an API and then returned to display the data in the DOM.
          </Fade>

        </ListGroupItem>

        <ListGroupItem>
          <h3>Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.</h3>
          <Fade in={fadeIn} tag="p" className="mt-3">
            Post: Create
            Get: Read
            Put: Update
            Delete: Destory
          </Fade>
        </ListGroupItem>

        <ListGroupItem>
          <Button outline size='sm' onClick={toggle}>Reveal Answers</Button>
        </ListGroupItem>

      </ListGroup>
    </Container>
  )
}

export default Answers;