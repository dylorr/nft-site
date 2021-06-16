import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import HomeBottom from "./HomeBottom";
import Particle from "../Particle";

function Home() {
    return (
      <section>
        <Container fluid className="home-section" id="home">
          <Particle/>
          <Container className="home-content" style={{ marginBottom: '20%'}}>
            <Row>
              <Col md={{span:10, offset:1}} className="home-header text-center">
                <h1 style={{ textAlign: 'center'}} className="heading">
                  All your <span className="green">nft</span> news now lives in one space.
                </h1>
                <h6 style={{ paddingBottom: 15 }} className="subtitle-home">
                  Daily digest, project alerts and informational updates.
                </h6>
                <Button variant='outline-dark' className=" btn btn-discord pulse" href="https://discord.com/invite/tEAMRKSKUX">Join Discord </Button>
              </Col>
            </Row>
          </Container>
        </Container>
        <HomeBottom/>
      </section>
    );
  }
  
  export default Home;