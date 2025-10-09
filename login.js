const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = document.getElementById("new-username").value.trim();
  const pass = document.getElementById("new-password").value.trim();

  if (!user || !pass) {
    errorMsg.textContent = "⚠️ Por favor, completa todos los campos.";
    errorMsg.style.color = "red";
    return;
  }

  // Obtener usuarios del localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Buscar coincidencia
  const found = users.find(u => u.username === user && u.password === pass);

  if (found) {
    // Guardar sesión
    localStorage.setItem("loggedUser", user);
    errorMsg.textContent = "✅ Inicio de sesión exitoso.";
    errorMsg.style.color = "green";

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1500);
  } else {
    errorMsg.textContent = "❌ Usuario o contraseña incorrectos.";
    errorMsg.style.color = "red";
  }
});
