function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if(email && password) {
        alert('Login bem-sucedido!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}