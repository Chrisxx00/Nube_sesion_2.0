import { loginvalidation } from "./Firebase.js";

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById("loginbtn");

    loginBtn.addEventListener('click', async (event) => {
        event.preventDefault();

        const email = document.getElementById("edtuser").value;
        const password = document.getElementById("edtpassword").value;

        // Validar que los campos no estén vacíos
        if (!email || !password) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        try {
            const validation = await loginvalidation(email, password);

            if (validation != null) {
                alert('Autenticación exitosa ' + email);
                window.location.href = "/Templates/home.html";
            } else {
                throw new Error('Error en la autenticación');
            }
        } catch (error) {
            alert(error.message);
            console.log('Error de autenticación:', error);
        }
    });
});