const form = document.getElementById("signupForm");
const msg = document.getElementById("signup-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = document.getElementById("new-username").value.trim();
  const pass = document.getElementById("new-password").value.trim();

  if (!user || !pass) {
    msg.textContent = "⚠️ Por favor, completa todos los campos.";
    msg.style.color = "red";
    return;
  }

  // Obtener usuarios existentes o lista vacía
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Verificar si ya existe ese usuario
  if (users.find(u => u.username === user)) {
    msg.textContent = "⚠️ Ese usuario ya existe. Intenta otro.";
    msg.style.color = "red";
    return;
  }

  // Guardar nuevo usuario
  users.push({ username: user, password: pass });
  localStorage.setItem("users", JSON.stringify(users));

  msg.textContent = "✅ Cuenta creada con éxito. Redirigiendo...";
  msg.style.color = "green";

  // Redirigir después de 2 segundos al login
  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
});
