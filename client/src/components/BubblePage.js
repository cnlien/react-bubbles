import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { Container } from 'reactstrap';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import Navigation from './Navigation';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(()=>{
    axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(res => {
        console.log ('Bubble Page: Colors from useEffect: ', res)
        setColorList(res.data)
      })
      .catch(err=>console.log('Error on BubblePage.js UseEffect: ', err.message))
  })

  return (
    <>
      <Navigation/>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
