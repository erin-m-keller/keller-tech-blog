const closeErr = (val) => {
  var emailErr = document.querySelector('.email-err'),
      pwdErr = document.querySelector('.password-err'),
      invalidEmailErr = document.querySelector('.invalid-email-err'),
      pwdLengthErr = document.querySelector('.password-length-err');
  if (val === 'email') {
    emailErr.classList.add('hidden');
  } else if (val === 'password') {
    pwdErr.classList.add('hidden');
  } else if (val === 'password-length') {
    pwdLengthErr.classList.add('hidden');
  } else if (val === 'invalid-email') {
    invalidEmailErr.classList.add('hidden');
  }
};

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
      const responseData = await response.json();
      if (responseData.error === 'Email is not registered. Please sign up.') {
        var emailErr = document.querySelector('.email-err');
        emailErr.classList.remove('hidden');
      } else if (responseData.error === 'Incorrect password.') {
        var pwdErr = document.querySelector('.password-err');
        pwdErr.classList.remove('hidden');
      }
    }
  }
};
  
const signupFormHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector('#signup-username').value.trim(),
        email = document.querySelector('#signup-email').value.trim(),
        password = document.querySelector('#signup-pass').value.trim();
  if (email && password && username) {
    const response = await fetch('/api/auth/create', {
      method: 'POST',
      body: JSON.stringify({ user_name: username, email: email, password: password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      const err = await response.json(),
            errMsg = err.errors[0].message;
      if (errMsg === 'Validation len on password failed') {
        var pwdErr = document.querySelector('.password-length-err');
        pwdErr.classList.remove('hidden');
      } else if (errMsg === 'email must be unique') {
        var emailErr = document.querySelector('.invalid-email-err');
        emailErr.classList.remove('hidden');
      }
    }
  }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);