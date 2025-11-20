const toggleBtn = document.querySelector('.toggle');
const passInput = document.getElementById('password');

if (toggleBtn && passInput) {
  toggleBtn.addEventListener('click', () => {
    const type = passInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passInput.setAttribute('type', type);
  });
}

const formCadastro = document.getElementById('form-signup');

if (formCadastro) {
    formCadastro.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username.length < 3 || password.length < 6) {
            alert("Preencha corretamente: Usuário (min 3) e Senha (min 6).");
            return;
        }

        let listaUsuarios = JSON.parse(localStorage.getItem('users') || '[]');
        const usuarioExiste = listaUsuarios.find(user => user.username === username);

        if (usuarioExiste) {
            alert("Usuário já existe!");
            return;
        }

        listaUsuarios.push({ username, password });
        localStorage.setItem('users', JSON.stringify(listaUsuarios));

        alert("Cadastrado com sucesso!");
        window.location.href = 'login.html';
    });
}


const formLogin = document.getElementById('form-login'); 

if (formLogin) {
    formLogin.addEventListener('submit', (event) => {
        event.preventDefault();

        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        const listaUsuarios = JSON.parse(localStorage.getItem('users') || '[]');

        const usuarioValido = listaUsuarios.find(
            user => user.username === usernameInput && user.password === passwordInput
        );

        if (usuarioValido) {
            const token = Math.random().toString(36).substring(2) + Date.now();
            localStorage.setItem('userToken', token);
            localStorage.setItem('userLogado', JSON.stringify(usuarioValido));

            alert("Login com sucesso!");
            window.location.href = 'index.html';
        } else {
            alert("Dados incorretos.");
        }
    });
}
