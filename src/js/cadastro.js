(function () {
  const form = document.getElementById('form-signup');
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const eUser = document.getElementById('e-user');
  const ePass = document.getElementById('e-pass');
  const okPass = document.getElementById('ok-pass');
  const toggle = document.querySelector('.toggle');

  function userValido(v){
    return /^[a-zA-Z0-9._-]{3,}$/.test(v.trim());
  }
  function passValida(v){
    return v.trim().length >= 6;
  }

  username.addEventListener('input', () => {
    eUser.style.display = userValido(username.value) ? 'none' : 'block';
  });

  password.addEventListener('input', () => {
    const ok = passValida(password.value);
    ePass.style.display = ok ? 'none' : 'block';
    okPass.style.display = ok ? 'block' : 'none';
  });

  toggle.addEventListener('click', () => {
    const isPwd = password.type === 'password';
    password.type = isPwd ? 'text' : 'password';
    toggle.textContent = isPwd ? '🙈' : '👁️';
  });

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const uOK = userValido(username.value);
    const pOK = passValida(password.value);

    if (uOK && pOK) {
      alert('Cadastro realizado com sucesso! 🎉');
      form.reset();
      okPass.style.display = 'none';
      toggle.textContent = '👁️';
      password.type = 'password';
    }
  });
})();

