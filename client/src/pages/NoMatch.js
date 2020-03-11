import React from "react";
import {Jumbotron, Col, Row, Container } from "react-bootstrap";

function NoMatch() {
  return (
    <Container fluid>
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