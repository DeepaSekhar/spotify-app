# Spotify API App

Angular app which utilizes the Spotify WEB API to allow users to search for music

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

# Aim

Aim of this project is about learning and exploring Rest API.

# Project

Utizilizing the Spotify Web API, users will be able to search for music.

Users can search for:

- Song names and get a list of songs with the name that they searched for.
- Artist and get a list of songs and albums that the artist owns.
- Album and get a list of songs in that album
- Users can also preview songs

# Technologies used

Angular(Front-End)
Node.js (Back-End)

## Instructions

To get started locally, follow these instructions:

1. If you haven't done it already, make a fork of this repo.
2. Clone to your local computer using git.
3. Make sure that you have Node installed with npm install
4. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Note

Spotify accound required for this app.sign up for a spotify accont(`https://www.spotify.com`)

## Features of Spotify Project

- Get authentication from spotify account.
- Search an artist's by name.
- displayed all the album's of an artist.
- displayed all the songs in an album.
- preview related music.

## Tools used

- postman to check API response.
- Quicktype to generates models and helper code for reading JSON.

## Images used

- spotify logo from spotify app.
- illustration (`https://undraw.co/search`).

## Reference from Spotify documentation

- Web API reference .[spotify web API](https://developer.spotify.com/documentation/web-api/).
- Spotify Authentication .[Authentication](https://developer.spotify.com/documentation/general/guides/authorization-guide/).

## approch

1. I started with list down the features of this project
2. I draw diagrams of how the different component needed to interact with each other and how the data would flow.
3. Next, Iread the spotify documentation,how the Spotify Web API endpoints return JSON metadata about music artists, albums, and tracks, directly from the Spotify Data Catalogue.
4. I used postman to test API calls and, used quick type to impliment and refactor interface.
5. Then ,I pass the data and displayed it using defferent end point.
6. Used scss to style those pages.
7. I used 4 screen sizes for the responsive design.( small: 767px, medium: 992px large: 1023px,xlarge: 1440px )

## Things struggled with this project

- Read and understand spotify API documentation.
- Impliment interface.
- Authentication with spotify.
- project Design(I had to change the styling multiple times)

## Work in progress

- waiting for the feed back on Design.
- tidying up the code.
