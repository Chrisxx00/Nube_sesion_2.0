import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';

import { 
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
  FacebookAuthProvider,
  deleteUser
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsUODJ1cw-1GsYSVh9kILhsCDRZfv_9ao",
  authDomain: "sesionweb-ad084.firebaseapp.com",
  databaseURL: "https://sesionweb-ad084-default-rtdb.firebaseio.com",
  projectId: "sesionweb-ad084",
  storageBucket: "sesionweb-ad084.appspot.com",
  messagingSenderId: "836022164770",
  appId: "1:836022164770:web:ecfbb3eaa4d6c0af52d97b",
  measurementId: "G-MT82NYQ0DF"
};

import{
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js" 


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const Google = new GoogleAuthProvider()
const Facebook = new FacebookAuthProvider()
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//Metodos de servicios de autenticacion
//metodo de autenticacion de usuario
export const loginvalidation = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

  //cerrar sesion del usuario
export const loginout=()=>signOut(auth)

//estado del usuario logeado
export function userinfo(){
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid)
    } else {
      window.location.href = "../Index.html"
    }
  });
}

//Crear cuentas de authenticación
  export const registerauth=(email,password)=>
  createUserWithEmailAndPassword(auth, email, password)

  //inicio con Google
export const Gooogle = () => signInWithPopup(auth, Google)

//mensaje de confirmacion

export const confirmacion = () => sendEmailVerification(auth.currentUser)

//mensaje de cambio de contraseña

export const cambiar = (email) => sendPasswordResetEmail(auth, email)

//inicio sesion con Facebook

export const loginFacebook = () => signInWithPopup(auth, Facebook)
export const providerFacebook = new FacebookAuthProvider()

//eliminar usuario

export function Deletuser() {
  const user = auth.currentUser
  deleteUser(user)
    .then(() => {
      // User deleted.
    })
    .catch((error) => {
      // An error ocurred
      // ...
    })
}

//Metodos database con firestore
export const addDataUser = (Id, name, Fecha, direccion, telefono, email, password) =>
  addDoc(collection(db, "users"), {
      Id,
      name,
      Fecha,
      direccion,
      telefono,
      email,
      password
  })