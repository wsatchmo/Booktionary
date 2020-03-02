import React, {Component} from "react";
import Book from "../components/Book";
import API from "../utils/API";
import {Jumbotron, Card, Form, Footer, Grid, Row, Col} from "react-bootstrap";
import { List } from "react-bootstrap/lib/Media";

class Home extends Component {
    state = {
        books: [],
        q: "",
        message: "Search Books"
    };

    handleInputChange = e => {
        const {name, value} = event.target;
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
            <Grid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1 className="text-center">Booktionary</h1>
                            <h2 className="text-center">Search and Save books from Google</h2>
                        </Jumbotron>
                    </Col>
                    <Col size="md-12">
                        <Card title="Search">
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
                            {this.state.books.length ? (
                                <List>
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
                <Footer />
            </Grid>
        )
    }
}

export default Home;