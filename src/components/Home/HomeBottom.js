import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

import {ReactComponent as OpenSea} from "../../assets/opensea.svg";
import {
  FaDiscord, FaTshirt, FaShoppingCart
} from "react-icons/fa";

import {
  BsBarChartFill
}
  from "react-icons/bs";


function HomeBottom(){

  
  return(
  <Container className='social-footer'>
    
    <Row>
      <Col  className="home-about-social">
      <ul className="home-about-social-links">
      <li className="social-icons">
                <a
                  href="https://twitter.com/TeamBloot"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> 
              
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
             {/*  <li className="social-icons">
                <a
                  href="https://bloot.shop/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTshirt/>
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://opensea.io/collection/blootofficial?collectionSlug=blootofficial&search[sortAscending]=true&search[sortBy]=PRICE&search[toggles][0]=BUY_NOW"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaShoppingCart/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://coinmarketcap.com/currencies/based-gold/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <BsBarChartFill/>
                </a>
              </li>
            </ul>

      </Col> 
    </Row>
  </Container>
  );
}


export default HomeBottom;
