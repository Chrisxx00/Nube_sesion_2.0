import { confirmacion, registerauth, addDataUser } from "../Controllers/Firebase.js";

const save_auth = document.getElementById('btnregister');
const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/

async function register() {
    const email = document.getElementById('edtuser').value;
    const password = document.getElementById('edtpassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmEmail = document.getElementById('confirmEmail').value;

    const Id= document.getElementById('id').value;
    const name = document.getElementById('nameR').value;
    const Fecha = document.getElementById('dateR').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;

    // Validar que las contraseñas coincidan
    if (password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres')
        return
      } else if (!specialCharacters.test(password)) {
        alert('La contraseña debe contener al menos un caracter especial')
        return
      } else if (email != confirmEmail) {
        alert('El usuario y la confirmación de usuario no coinciden')
        return
      } else if (password != confirmPassword) {
        alert('La contraseña y la confirmación de contraseña no coinciden')
        return
      } else {

        const validar = addDataUser(Id, name, Fecha, direccion, telefono, email, password)
        const verificar = await validar
          .then((verificar) => {
            alert('Usuario registrado exitosamente')
            const user = verificar.user;

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
            window.location.href="/Index.html"
          })
          .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            alert(errorMessage)
          })
      }
    }
  
  window.addEventListener('DOMContentLoaded', async () => {
      save_auth.addEventListener('click', register);
  });