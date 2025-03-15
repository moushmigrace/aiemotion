document.querySelector('.signin-btn').addEventListener('click', function () {
    const email = document.querySelector('.input-field[type="email"]').value;
    const password = document.querySelector('.input-field[type="password"]').value;
    if (email && password) {
      alert(`Sign-in successful with email: ${email}`);
    } else {
      alert('Please fill in both fields.');
    }
  });
  