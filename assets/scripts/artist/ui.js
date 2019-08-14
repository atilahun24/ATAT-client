'use strict'

const showArtistsTemplate = require('../templates/artists-display.handlebars')

const getAllArtistsSuccess = function (responseData, txt) {
  $('#message').removeClass('d-none')
  $('#message').text(txt)
  setTimeout(() => $('#message').addClass('d-none'), 8000)
  $('#artistList').text(JSON.stringify(responseData.artists))
  // console.log(responseData)
  const showArtistsHtml = showArtistsTemplate({ artists: responseData.artists })
  $('#artistList').html(showArtistsHtml)
}

const getAllArtistsFailure = function (responseData) {
  $('#message').removeClass('d-none')
  $('#message').text("Sorry, there's been an error gathering your artists")
  setTimeout(() => $('#message').addClass('d-none'), 2500)
}

const addNewArtistSuccess = function (responseData) {
  $('#message').removeClass('d-none')
  $('#message').text("You've added " + responseData.artist.name + ' to your favorite artists!')
  setTimeout(() => $('#message').addClass('d-none'), 3500)
  $('form').trigger('reset')
}

const addNewArtistFailure = function (responseData) {
  $('#message').removeClass('d-none')
  $('#message').text('Unable to add artist')
  setTimeout(() => $('#message').addClass('d-none'), 2500)
}

const deleteArtistSuccess = function () {
  $('#message').removeClass('d-none')
  $('#message').text('You have deleted an artist from your favorites')
  setTimeout(() => $('#message').addClass('d-none'), 2500)
}

const deleteArtistFailure = function () {
  $('#message').removeClass('d-none')
  $('#message').text('Unable to delete artist from your favorites')
  setTimeout(() => $('#message').addClass('d-none'), 2500)
}

const updateArtistSuccess = function (responseData) {
  $('#message').text('You have updated your artist')
  $('#message').removeClass('d-none')
  setTimeout(() => $('#message').addClass('d-none'), 3500)
  $('form').trigger('reset')
}

const updateArtistFailure = function (responseData) {
  $('#message').removeClass('d-none')
  $('#message').text('Unable to update artist')
  setTimeout(() => $('#message').addClass('d-none'), 2500)
  $('form').trigger('reset')
}

module.exports = {
  getAllArtistsSuccess,
  addNewArtistSuccess,
  deleteArtistSuccess,
  updateArtistSuccess,
  getAllArtistsFailure,
  addNewArtistFailure,
  deleteArtistFailure,
  updateArtistFailure
}
