import React from "react";
import {Col, Row, Grid, Jumbotron} from "react-bootstrap";

function None() {
  return (
    <Grid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h3 className="text-center">
                Sorry, page does not exist. Please go back 
            </h3>
          </Jumbotron>
        </Col>
      </Row>
    </Grid>
  );
}

export default None;
