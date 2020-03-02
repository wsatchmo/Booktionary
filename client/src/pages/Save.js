import React, { Component } from "react";
import {Jumbotron, Card, Footer, Grid, Row, Col} from "react-bootstrap";
import { List } from "react-bootstrap/lib/Media";
import Book from "../components/Book";
import API from "../utils/API";

class Save extends Component {
  state = {
    books: []
  };

  //Load saved books on mount
  componentDidMount() {
    this.getSavedBooks();
  }

  //Load saved books
  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  //Delete books from saved list
  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  render() {
    return (
      <Grid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
                <h1 className="text-center">Booktionary</h1>
                <h2 className="text-center">Search and Save books from Google</h2>
            </Jumbotron>
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
      </Grid>
    );
  }
}

export default Save;