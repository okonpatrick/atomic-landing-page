import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LocalNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <LocalNavbar />

        <Hero Button3="FREE DOWNLOAD" />

        <Card
          title1="Intuitive Thinking"
          details1="Intuitive thinking is quick, instinctual decision-making based on experience and gut feelings, often yielding insights not obvious through analysis. It's valuable in fast decisions but can be influenced by biases and emotions."
          title2="Orange for Carrots"
          details2="Orange is the signature hue of carrots, thanks to beta-carotene, a pigment that not only gives them their color but also supplies vital nutrients, like vitamin A, crucial for eye health and overall well-being."
          title3="Infinite Possibilities"
          details3="Infinite possibilities alludes to the boundless potential and diverse opportunities that life and the future offer. It underscores the idea that there are countless avenues to explore and opportunities to seize, fostering a sense of optimism and wonder."
        />
      </div>
    );
  }
}
