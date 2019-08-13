'use strict'

const showArtistsTemplate = require('../templates/artists-display.handlebars')

const getAllArtistsSuccess = function (responseData) {
  $('#artistList').text(JSON.stringify(responseData.artists))
  console.log(responseData)
  const showArtistsHtml = showArtistsTemplate({ artists: responseData.artists })
  $('#artistList').html(showArtistsHtml)
}

const addNewArtistSuccess = function (responseData) {
  $('#message').removeClass('d-none')
  // $('#message').text("You've added " + responseData.artist.name + ' to your favorite artists!')
  $('#message').text("You've added " + responseData.artist.name + ' to your favorite artists!')
  setTimeout(() => $('#message').addClass('d-none'), 3500)
  $('form').trigger('reset')
}

module.exports = {
  getAllArtistsSuccess,
  addNewArtistSuccess
}
