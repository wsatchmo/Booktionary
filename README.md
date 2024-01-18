# Booktionary

<img src="https://raw.githubusercontent.com/wsatchmo/Booktionary/master/client/src/images/booktionary_logo_dark.png" data-canonical-src="https://raw.githubusercontent.com/wsatchmo/Booktionary/master/client/src/images/booktionary_logo_dark.png" width="100%"/>

### A React-based book search app utilizing the Google Books API & MongoDB

```diff
! HOW IT WORKS !
```
Utilizes:
* Mongo
* Express
* React
* Node
* Axios
* Google Books API
* React-Bootstrap Framework

Searches books from the Google Books api and populates the page in real time using React. Saves searches and enables users to save books as well as status (read, reading list, rating) within a MongoDB database linked to an id assigned to the user's computer, using axios requests. All updates occur in real time as well. Utilizes React-Bootstrap framework for a highly modular user experience that fits with modern HCI standards. 

```diff
+ WHAT IT DOES +
```

  - On the Home page of the app, users may search for a book using the search form

     * Matching books populate dynamically in the section below after searching

     * They contain the Title, Author(s), and a short description of these books

     * Users can save books into a saved list, which adds them to a Mongo Database

     * Books already saved to the Database are not shown in search

  - On the Saved Books page of the app, users will find the books they have saved

     * Again, saved books contain the Title, Author(s), and a short description of these books

     * Users can delete these books from the list, dropping them individually from the DB

```diff
! ~DEPLOYMENT~ !
```
UPDATE: As Heroku has removed all free plans, this project is no longer deployed. I am currently working on finding it a home. It will likely be redeployed via [Google Firebase](https://firebase.google.com) in the future.

DEPLOYED SCREENSHOT:

![Screenshots](/client/src/images/screenshot.png)

```diff
- Notes -
```

* If downloading this project remember to use **npm install** to install all required dependencies

* This project is built with Bootstrap and uses [React-Bootstrap](https://react-bootstrap.github.io/) components

```diff
# Have fun coding! #
```
