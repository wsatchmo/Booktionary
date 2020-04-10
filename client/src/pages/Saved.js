import React, { Component } from "react";
import {Card, Col, Row, Container} from "react-bootstrap";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { List } from "../components/List";
import Jumbo from "../components/Jumbo";

//Shows saved books on Saved component
class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  //Gets saved books from the API
  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  //Delete book event
  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  //Render the saved books on the List component
  render() {
    return (
      <Container className="main">
        <Row>
          <Col size="md-12">
            <Jumbo></Jumbo>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Saved;
