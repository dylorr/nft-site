import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

import {ReactComponent as OpenSea} from "../../assets/opensea.svg";
import {
  FaDiscord
} from "react-icons/fa";


function HomeBottom(){

  
  return(
  <Container className='social-footer'>
    
    <Row>
      <Col  className="home-about-social">
      <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://discord.gg/bloot"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaDiscord />
                </a>
              </li>
              <li className="social-icons">

              </li>
              <li className="social-icons"> 
                
              </li>
            </ul>

      </Col> 
    </Row>
  </Container>
  );
}


export default HomeBottom;
