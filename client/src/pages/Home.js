import React, {Component} from "react";
import Book from "../components/Book";
import API from "../utils/API";
import {Jumbotron, Card, Form, Row, Col, Container, Button} from "react-bootstrap";
import {List} from "../components/List";

class Home extends Component {
    state = {
        books: [],
        q: "",
        message: "Searched books will appear here"
    };

    handleInputChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    };

    getBooks = () => {
        API.getBooks(this.state.q)
        .then(res =>
            this.setState({
                books: res.data
            })
        ).catch(()=>
            this.setState({
                books: [],
                message: "No new books matching. Please search something else"
            })
        );
    };

    handleFormSubmit = e => {
        e.preventDefault();
        this.getBooks();
    };

    handleBookSaved = id => {
        let book = this.state.books.find(book => book.id === id);

        API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            link: book.volumeInfo.infoLink,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
        }).then(()=> this.getBooks());
    };

    render(){
        return(
            <Container>
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
                        <Card title="Search">
                            <Form>
                                <Form.Label>{this.state.q}</Form.Label>
                                <Form.Group controlId="Form.ControlTextarea1">
                                    <Form.Label>Search Books</Form.Label>
                                    <Form.Control as="textarea" rows="1" handleInputChange={this.handleInputChange}/>
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={this.handleFormSubmit}>
                                    Submit
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <Card title="Results">
                            {this.state.books.length ? (
                                <List>
                                    {console.log("this.state::", this.state)}
                                    {this.state.books.map(book => (
                                        <Book
                                            key={book.id}
                                            title={book.volumeInfo.title}
                                            link={book.volumeInfo.infoLink}
                                            authors={book.volumeInfo.authors.join(", ")}
                                            description={book.volumeInfo.description}
                                            image={book.volumeInfo.imageLinks.thumbnail}
                                            Button={()=> (
                                                <button
                                                    onClick={() => this.handleBookSaved(book.id)}
                                                    className="btn btn-primary"
                                                >   Save
                                                </button>
                                            )}
                                        />
                                    ))}
                                </List>
                            ):(
                                <h3 className="text-center">{this.state.message}</h3>
                            )}
                        </Card>
                    </Col>
                </Row>
            </Container>
           
        )
    }
}

export default Home;