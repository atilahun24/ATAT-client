'use strict'

const store = require('../store.js')

const onSignUpSuccess = responseData => {
  // console.log('success', responseData)
  $('#message').removeClass('d-none alert-success alert-danger')
  // $('#message').removeClass('d-none')
  $('#message').text('You have successfully signed up!')
  $('form').trigger('reset')
  $('#sign-up2').addClass('d-none')
}

const onSignUpFailure = responseData => {
  // console.log('failure', responseData)
  $('#message').removeClass('d-none alert-success alert-danger')
  // $('#message').removeClass('d-none')
  $('#message').text('Sign up failed :( ').addClass('alert-danger')
  $('form').trigger('reset')
}

const onSignInSuccess = responseData => {
  $('#getAllArtists').removeClass('d-none')
  $('#hideAddArtist').removeClass('d-none')
  $('#artistList').removeClass('d-none')
  // console.log('success', responseData)
  // $('#createForHide').removeClass('d-none')
  $('#message').removeClass('d-none alert-success alert-danger')
  $('#message').addClass('alert-success')

  // $('#message').text("You're in! Welcome!").addClass('alert-success')
  $('#message').text("You're In! Welcome!")
  setTimeout(() => $('#message').addClass('d-none'), 2500)
  $('#sign-out2').removeClass('d-none')
  $('#change-pw2').removeClass('d-none')
  $('#getArtists').removeClass('d-none')
  $('#signInNav').addClass('d-none')
  $('#sign-up2').addClass('d-none')
  $('form').trigger('reset')
  // whenever we sign in successfully, the user is returned in the response so we store it
  // for any of our authenticated API calls
  // 'responseData.user' contains 'responseData.user.token'

  store.user = responseData.user
  // console.log('store is', store)
}

const onSignInFailure = responseData => {
  // console.log('failure', responseData)
  $('#message').text('Sign in failed. Try Again!')
  $('#message').removeClass('d-none')
  $('#message').addClass('alert-danger')
  $('form').trigger('reset')
}

const onChangePasswordSuccess = () => {
  $('#message').text('Changed password successfully!')
  // $('#message').removeClass()
  $('#message').addClass('alert-success')
  $('form').trigger('reset')
}

const onChangePasswordFailure = () => {
  $('#message').text('change password failed ')
  $('#message').removeClass()
  $('#message').addClass('alert-danger')
  $('form').trigger('reset')
}

const onSignOutSuccess = () => {
  $('#getAllArtists').addClass('d-none')
  $('#hideAddArtist').addClass('d-none')
  $('#artistList').addClass('d-none')
  $('#message').text('Goodbye for now 👋')
  setTimeout(() => $('#message').addClass('d-none'), 2500)
  $('#sign-out2').addClass('d-none')
  $('#change-pw2').addClass('d-none')
  $('#createForHide').addClass('d-none')
  $('#notification').addClass('d-none')
  $('#sign-inNav').removeClass('d-none')
  $('#sign-up2').removeClass('d-none')
  $('#endMessage').addClass('d-none')
}

const onSignOutFailure = () => {
  $('#message').text('sign out failed ')
  // $('#message').removeClass()
  $('#message').addClass('alert-danger')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
