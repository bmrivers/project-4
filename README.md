

## tape-deck
Bonny Rivers // General Assembly Santa Monica // Project 4 // April 2019

<hr>

[Click for a live demo on heroku](https://tape--deck.herokuapp.com/)

####Introduction

tape-deck is a social playlist-sharing app. The idea came from my original plan to re-create Spotify (not likely possible to do in the span of 1.5 weeks). 

Users can sign up with an email to be able to create playlists. 

![tape-deck screenshot](http://i68.tinypic.com/2s0oi2c.png)

When creating a new playlist, users use the search bar to search through the Last.fm API for songs. Last.fm has a robust amount of song data available and includes many songs that aren't available on Spotify or Apple Music.

![tape-deck screenshot2](http://i64.tinypic.com/29p99ad.png)

####Technologies Used

* React
* MongoDB + Mongoose
* Express
* Node.js
* Heroku
* Last.fm API
* VS Code
* Chrome Dev Tools
* Flaticon.com
* Google Fonts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

####Unsolved Problems
* On the Create Playlist page, removing the song using the search Component does not always remove the song from the new Playlist.
* The song artwork and information doesn't include the album that the song is included on. That requires an additional call from the API (which is unfortunate)


####Next Steps
* "Like" Button: make it clickable, and implement a "Likes" page so that users can save songs for later
*  Full CRUD: add the ability to update and delete playlists
* Add pagination to search results (easy fix)
* Friends-only: implement the ability to add friends so that users will only see playlists from people they know.
