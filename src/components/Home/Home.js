import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import HomeBottom from "./HomeBottom";
import Particle from "../Particle";
import Discord from "../../assets/discord.png"

import {
  FaDiscord, FaCoins
} from "react-icons/fa";

import {
  GrMoney
} from "react-icons/gr";

function Home() {
    return (
      <section>
        <Container fluid className="home-section" id="home">
          <Particle/>
          <Container className="home-content" style={{ marginBottom: '20%'}}>
            <Row>
              <Col md={{span:10, offset:1}} className="home-header text-center">
                <h1 style={{ textAlign: 'center'}} className="heading">
                   <span className="green">Bloot</span>
                </h1>
                <h6 style={{ paddingBottom: 15 }} className="subtitle-home">
                It's basically worthless.
                </h6>
                <Button variant='outline-dark' className=" btn btn-discord pulse" href="https://docs.google.com/forms/d/e/1FAIpQLSd4_87W-3Mza1x2IaNgPMXXXGImtEqKKOslX0XSk7rGhbg6wA/viewform"><FaCoins className='discord-logo'/>Apply to the Bloot Fund </Button>
              </Col>
            </Row>
          </Container>
          
        </Container>
        <HomeBottom/>
      </section>
    );
  }
  
  export default Home;