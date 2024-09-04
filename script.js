function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if username and password are correct (replace with your own validation logic)
    if (username === 'sanjay' && password === '1234') {
      // Redirect to the next page
      window.location.href = 'Frame2.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }