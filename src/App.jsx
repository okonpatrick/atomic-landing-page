import './App.css'
import Card from "./components/Card"
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
 

  return (
    
      <Card 
        Button1="Login"
        Button2="SignUp"
        Button3="FREE DOWNLOAD"

        title1="Intuitive Thinking"
        details1="Intuitive thinking is quick, instinctual decision-making based on experience and gut feelings, often yielding insights not obvious through analysis. It's valuable in fast decisions but can be influenced by biases and emotions."
      
        title2="Orange for Carrots"
        details2="Orange is the signature hue of carrots, thanks to beta-carotene, a pigment that not only gives them their color but also supplies vital nutrients, like vitamin A, crucial for eye health and overall well-being."


        title3="Infinite Possibilities"
        details3="Infinite possibilities alludes to the boundless potential and diverse opportunities that life and the future offer. It underscores the idea that there are countless avenues to explore and opportunities to seize, fostering a sense of optimism and wonder."
      />
  )
}

export default App
