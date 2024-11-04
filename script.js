const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => { 
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => { 
        nav.classList.remove('active');
    })
}

document.addEventListener("DOMContentLoaded", function() {

    document.querySelector(".form-box").addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        var validUsername = "usuario@gmail.com";
        var validPassword = "123456";

        if (username === validUsername && password === validPassword) {
            alert("Inicio de sesión exitoso.");
            
            window.location.href = "/index.html";
        } else {
            alert("Email o contraseña incorrectos.");
        }
    });
});

var showPassword = document.getElementById("showPassword");
var passwordField = document.getElementById("password");

showPassword.addEventListener("change", function() {
    if (showPassword.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});