'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui')

const onAddNewArtist = (event) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  // //console.log('add artist pressed', formData)
  api.addNewArtist(formData)
    .then(data => {
      ui.addNewArtistSuccess(data)
    })
    .catch(ui.addNewArtistFailure)
}

const onGetAllArtists = function (event, txt) {
  event.preventDefault()
  api.getAllArtists()
    .then(data => {
      ui.getAllArtistsSuccess(data, txt)
    })
    .catch(ui.getAllArtistsFailure)
}

const onDeleteArtist = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteArtist(id)
    .then(function () {
      onGetAllArtists(event, 'You have deleted an artist')
      // anonymous function
      // get artists reloads the list with the selected artist removed
    })
    // .then(ui.deleteArtistSuccess)
    .catch(ui.deleteArtistFailure)
}

const onUpdateArtist = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  const formData = getFormFields(event.target)
  api.updateArtist(id, formData)
    .then(function (responseData) {
      onGetAllArtists(event, 'You have updated your artist')
    })
    // .then(ui.updateArtistSuccess)
    .catch(ui.updateArtistFailure)
}

module.exports = {
  onAddNewArtist,
  onGetAllArtists,
  onDeleteArtist,
  onUpdateArtist
}
