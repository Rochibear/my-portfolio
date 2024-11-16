const auth = firebase.auth();

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert('登入成功！');
      window.location.href = 'portfolio.html';
    })
    .catch((error) => {
      alert('登入失敗：' + error.message);
    });
});
