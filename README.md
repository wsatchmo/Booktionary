# Booktionary

![Book](http://icons.iconarchive.com/icons/google/noto-emoji-objects/1024/62863-books-icon.png | width=250)

### A React-based book search app utilizing the Google Books API


```diff
+ How it works +
```

  - On the Home page of the app, users may search for a book using the search form

     * Matching books populate dynamically in the section below after searching

     * They contain the Title, Author(s), and a short description of these books

     * Users can save books into a saved list, which adds them to a Mongo Database

     * Books already saved to the Database are not shown

  - On the Saved Books page of the app, users will find the books they have saved

     * Again, saved books contain the Title, Author(s), and a short description of these books

     * Users can delete these books form the list, dropping them individually from the DB

```diff
! Deployment !
```

This project is deployed [here on Github Pages](https://gentle-forest-73354.herokuapp.com/) 

```diff
- Notes -
```

* If downloading this project remember to use **npm install** to install all required dependencies

* This project is built with Bootstrap and uses [React-Bootstrap](https://react-bootstrap.github.io/) components

```diff
# Have fun coding! #
```