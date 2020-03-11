import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "react-bootstrap";
import "./style.css";

function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    <ListItem>
      <Row className="flex-wrap">
        <Col size="md-8">
          <h3 className="font-italic">{title}</h3>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={link}>
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="font-italic small">Author(s): {authors}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <img className="book-image" src={image} alt={title} />
        </Col>
        <Col>
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Book;