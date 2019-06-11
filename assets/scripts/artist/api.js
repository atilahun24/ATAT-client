const config = require('../config.js')
const store = require('../store')

const addNewArtist = formData => {
  console.log('from api newArtist')
  console.log(store.user.token)
  console.log(formData.artist)

  return $.ajax({
    url: config.apiUrl + '/artists',
    method: 'POST',
    // contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const getAllArtists = function () {
  console.log('from api getArtists')

  return $.ajax({
    url: config.apiUrl + '/artists/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

module.exports = {
  addNewArtist,
  getAllArtists
}
