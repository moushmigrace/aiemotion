document.querySelector('.continue-btn').addEventListener('click', function () {
    const email = document.querySelector('#email').value;
    if (email) {
      alert(`Proceeding with email: ${email}`);
    } else {
      alert('Please enter a valid email address.');
    }
  });
  