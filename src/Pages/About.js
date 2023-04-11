import React from "react";
import Figure from 'react-bootstrap/Figure';
import MainHeader from "../Components/Header/MainHeader";
import pics from '../asset/pics.jpg';
import './About.css';

export default function About() {
  return (
    <>
<MainHeader/>
      <div>
      <h1>About Us</h1>
      <p>
       E-Commerce, also known as e-Business, or electronic business,
       is simply the sale and purchase of services and goods over an electronic medium,
       like the Internet.
       It also involves electronically transferring data and funds between two or more parties.
       Simply put, it is online shopping as we commonly know it.
       E-Commerce started way back in the 1960s when organizations began to use Electronic Data Interchange (EDI) 
       to transfer documents of their business back and forth. 
      
      </p>
      <Figure>
      <Figure.Image
        width={1000}
        height={800}
        alt="171x180"
        src={pics}
      />
      </Figure>
      </div>
      
    </>
  );
}
