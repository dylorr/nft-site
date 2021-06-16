import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

function HomeBottom(){
  return(
  <Container className='social-footer'>
    <Row>
      <Col  className="home-about-social">
      <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://twitter.com/hunterorrell"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/user/HunterOrrell"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/hunterorrell"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>

      </Col> 
    </Row>
  </Container>
  );
}


export default HomeBottom;
