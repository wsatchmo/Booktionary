import React from "react";
import {Jumbotron, Col, Row, Container } from "react-bootstrap";

//No Match component shows a 404 page
function NoMatch() {
  return (
    <Container className="main" fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron className="bg-dark text-secondary">
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              We're sorry, there doesn't seem to be anything here...
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;