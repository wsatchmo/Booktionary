import React, { Component } from "react";
import {Jumbotron, Col, Row, Container, Card} from "react-bootstrap";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { List } from "../components/List";

//CSS
const styles = {
  form : {
    padding: 20,
    marginBottom: 20
  }
}

//Class Definition
class Home extends Component {
  state = {
    books: [],
    q: "",
    message: "Searched books will appear here"
  };

  //Input change event
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  //Form submit event
  handleFormSubmit = e => {
    e.preventDefault();
    this.getBooks();
  };

  //Grab books from the API on search
  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No new books matching. Please search something else"
        })
      );
  };

  //Save book event
  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    //Use our API to save a book
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

  //Rendering the Home element tot he page
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron className="bg-dark text-secondary">
              <h1 className="text-center">
                <i className="fa fa-book"></i>
                <strong>  Booktionary  </strong>
                <i className="fa fa-book"></i>
              </h1>
              <h2 className="text-center">Search and Save books with the Google API</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Book Search" style={styles.form}>
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              <Card.Body>
              <Card.Text>
                  {this.state.books.length ? (
                    <List>
                      {console.log("BOOKS STATE::" , this.state)}
                      {this.state.books.map(book => (
                        <Book
                          key={book.id}
                          title={book.volumeInfo.title}
                          subtitle={book.volumeInfo.subtitle}
                          link={book.volumeInfo.infoLink}
                          authors={book.volumeInfo.authors.join(", ")}
                          description={book.volumeInfo.description}
                          image={book.volumeInfo.imageLinks.thumbnail}
                          Button={() => (
                            <button
                              onClick={() => this.handleBookSave(book.id)}
                              className="btn btn-primary ml-2"
                            >
                              Save
                            </button>
                          )}
                        />
                      ))}
                    </List>
                  ) : (
                    <h2 className="text-center">{this.state.message}</h2>
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;