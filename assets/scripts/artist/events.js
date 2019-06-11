'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui')

const onAddNewArtist = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  console.log('add artist pressed', formData)
  api.addNewArtist(formData)
    .then(ui.addNewArtistSuccess)
    .catch(ui.addNewArtistFailure)
}

const onGetAllArtists = function (event) {
  event.preventDefault()
  api.getAllArtists()
    .then(ui.getAllArtistsSuccess)
    .catch(ui.getAllArtistsFailure)
}

module.exports = {
  onAddNewArtist,
  onGetAllArtists
}
