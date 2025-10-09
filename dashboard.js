const user = localStorage.getItem("loggedUser");

if (!user) {
  // Si no hay usuario, redirige al login
  window.location.href = "login.html";
} else {
  // Mostrar el usuario en el encabezado
  document.getElementById("welcome").textContent = `Bienvenido, ${user} 👋`;
}

// Cerrar sesión
const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("loggedUser");
  window.location.href = "index.html";
});
