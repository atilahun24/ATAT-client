'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui')

const onAddNewArtist = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  // //console.log('add artist pressed', formData)
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

const onDeleteArtist = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteArtist(id)
    .then(function () {
      onGetAllArtists(event)
      // anonymous function
      // get artists reloads the list with the selected artist removed
    })
    .catch(ui.onDeleteArtistFailure)
}

const onUpdateArtist = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const formData = getFormFields(event.target)
  api.updateArtist(id, formData)
    .then(function (responseData) {
      onGetAllArtists(event)
    })
    .catch(ui.onUpdateArtistFailure)
}

module.exports = {
  onAddNewArtist,
  onGetAllArtists,
  onDeleteArtist,
  onUpdateArtist
}
