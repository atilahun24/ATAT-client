'use strict'

const showArtistsTemplate = require('../templates/artists-display.handlebars')

const getAllArtistsSuccess = function (responseData) {
  $('#artistList').text(JSON.stringify(responseData.artists))
  //console.log(responseData)
  const showArtistsHtml = showArtistsTemplate({ artists: responseData.artists })
  $('#artistList').html(showArtistsHtml)
}

const addNewArtistSuccess = function (responseData) {
  $('#message').text("You've added " + responseData.artist.name + ' to your favorite artists!')
  $('form').trigger('reset')
}

module.exports = {
  getAllArtistsSuccess,
  addNewArtistSuccess
}
