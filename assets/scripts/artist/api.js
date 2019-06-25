const config = require('../config.js')
const store = require('../store')

const addNewArtist = formData => {
  // console.log('from api newArtist')
  // console.log(store.user.token)
  // console.log(formData.artist)

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
  // console.log('from api getArtists')

  return $.ajax({
    url: config.apiUrl + '/artists/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteArtist = function (id) {
  return $.ajax({
    url: config.apiUrl + '/artists/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateArtist = (id, formData) => {
  // console.log('api update check')
  return $.ajax({
    url: config.apiUrl + '/artists/' + id,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  addNewArtist,
  getAllArtists,
  deleteArtist,
  updateArtist
}
