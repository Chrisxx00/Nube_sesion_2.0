import { Gooogle, userinfo, confirmacion } from '../Controllers/Firebase.js'

const google = document.getElementById('btngoogle')

async function Google() {
  try {
    await Gooogle()
    userinfo()
    confirmacion()
      .then(() => {
        console.log('Correo electrónico de verificación enviado con éxito')
      })
      .catch((error) => {
        console.error(
          'Error al enviar correo electrónico de verificación:',
          error
        )
      })
    window.location.href = '../Templates/Home.html'
  } catch (error) {
    console.error('Error al iniciar sesión con Google:', error)
    alert('Error al iniciar sesión con Google. Inténtelo de nuevo.')
  }
}

window.addEventListener('DOMContentLoaded', () => {
  google.addEventListener('click', Google)
})