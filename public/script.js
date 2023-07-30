const togglePassword = document.getElementById("eye");

const showOrHidePassword = () => {
  const password = document.getElementById("password");
  if (password) {
    if (password.type === "password") {
      password.type = "text";
      togglePassword.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      password.type = "password";
      togglePassword.classList.replace("fa-eye-slash", "fa-eye");
    }
  }
};

togglePassword.addEventListener("click", showOrHidePassword);
