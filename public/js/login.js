const loginFormHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#email').value.trim(),
          password = document.querySelector('#password').value.trim();
    if (email && password) {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(JSON.stringify(response) + ' - Failed to log in');
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#signup-username').value.trim(),
          email = document.querySelector('#signup-email').value.trim(),
          password = document.querySelector('#signup-pass').value.trim();
    console.log("username: " + username);
    console.log("email: " + email);
    console.log("password: " + password);
    if (email && password && username) {
      const response = await fetch('/api/auth/create', {
        method: 'POST',
        body: JSON.stringify({ user_name: username, email: email, password: password }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log("response.ok: " + response.ok);
      if (response.ok) {
        document.location.replace('/');
      } else {
        const err = await response.json(),
              errMsg = err.errors[0].message;
        console.log(errMsg);
        if (errMsg === 'Validation len on password failed') {
          $('#password-length').removeClass('hidden').addClass('visible');
        } else if (errMsg === 'email must be unique') {
          $('#invalid-email').removeClass('hidden').addClass('visible');
        }
      }
    }
  };
  
  const closePasswordLength = async (event) => {
    event.preventDefault();
    console.log("password length");
    let elem = document.querySelector('#password-length');
    elem.classList.toggle('hidden');
  };
  
  const closeInvalidEmail = async (event) => {
    event.preventDefault();
    console.log("invalid email");
    let elem = document.querySelector('#invalid-email');
    elem.classList.toggle('hidden');
  };

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('#password-length').addEventListener('click', closePasswordLength);
document.querySelector('#invalid-email').addEventListener('click', closeInvalidEmail);