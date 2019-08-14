'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const artistEvents = require('./artist/events')
const authEvents = require('./auth/events')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pwForm').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create').on('submit', artistEvents.onAddNewArtist)
  $('#getArtists').on('click', function (event) {
    artistEvents.onGetAllArtists(event, 'Your favorite artists are displayed below')
  })
  // $('#artistsList').on('click', artistEvents.onDeleteArtist)
  $('#artistList').on('click', '.remove-artist', artistEvents.onDeleteArtist)
  $('#artistList').on('submit', '.update-artist', artistEvents.onUpdateArtist)
})
