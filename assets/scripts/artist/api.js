const config = require('../config.js')
const store = require('../store')

const newArtist = () => {
  console.log('from api newArtist')

  return $.ajax({
    url: config.apiUrl + '/artists',
    method: 'POST',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

const getArtists = function () {
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
  newArtist,
  getArtists
}
