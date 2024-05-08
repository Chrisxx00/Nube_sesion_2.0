import {
    loginFacebook,
    userinfo,
    providerFacebook,
  } from '../Controllers/Firebase.js'
  
  const facebook = document.getElementById('facebook')
  
  async function Facebook() {
    try {
      await loginFacebook(providerFacebook)
      await userinfo()
      window.location.href = '../Templates/Home.html'
    } catch (error) {
      // Manejo de errores
    }
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    facebook.addEventListener('click', Facebook)
  })
  