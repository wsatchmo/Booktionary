# Booktionary

<img src="https://raw.githubusercontent.com/wsatchmo/Booktionary/master/client/src/images/booktionary_logo_dark.png" data-canonical-src="https://raw.githubusercontent.com/wsatchmo/Booktionary/master/client/src/images/booktionary_logo_dark.png" width="100%"/>

### A React-based book search app utilizing the Google Books API & MongoDB


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

     * Users can delete these books from the list, dropping them individually from the DB

```diff
! Deployment !
```

This project is deployed [here on Heroku](https://gentle-forest-73354.herokuapp.com/) 

![Screenshots](/client/src/images/screenshot.png)

```diff
- Notes -
```

* If downloading this project remember to use **npm install** to install all required dependencies

* This project is built with Bootstrap and uses [React-Bootstrap](https://react-bootstrap.github.io/) components

```diff
# Have fun coding! #
```
