import{userinfo, loginout, Deletuser} from '../Controllers/Firebase.js';

userinfo()

const sesion = document.getElementById('btnlogout')
const borrar = document.getElementById('btnBorrar')

async function cerrarsesion(){
    const verificacion=loginout()
    const comprobar = await verificacion

    .then((comprobar)=>{
        alert('Sesion cerrada')
        window.location.href='../Index.html'
    })
    .catch((error)=>{
        alert('Sesion no cerrada')
    })
}

async function BorrarUsuario() {
    const verificacion = Deletuser()
    const comprobar = await verificacion
  
      .then((comprobar) => {
        alert('Usuario elimiando')
  
        setTimeout(() => {
          window.location.href = '../Index.html'
        }, 2000)
      })
      .catch((error) => {
        alert('Usuario no eliminado')
      })
  }

window.addEventListener('DOMContentLoaded', async()=>{
    sesion.addEventListener('click', cerrarsesion)
})

window.addEventListener('DOMContentLoaded', async()=>{
    sesion.addEventListener('click',BorrarUsuario)
})