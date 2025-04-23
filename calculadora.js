function insertar(valor) {
  document.getElementById("pantalla").value += valor;
}

function limpiar() {
  document.getElementById("pantalla").value = "";
}

function borrar() {
  let pantalla = document.getElementById("pantalla");
  pantalla.value = pantalla.value.slice(0, -1);
}

function calcular() {
  try {
    let resultado = eval(document.getElementById("pantalla").value);
    document.getElementById("pantalla").value = resultado;
  } catch {
    document.getElementById("pantalla").value = "Error";
  }
}

const modoSwitch = document.getElementById("modoSwitch");
const iconoModo = document.getElementById("iconoModo");
const reflejo = document.getElementById("reflejo");

modoSwitch.addEventListener("change", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
  iconoModo.textContent = document.body.classList.contains("dark") ? "🌙" : "☀️";
  reflejo.style.animation = "none";
  void reflejo.offsetWidth; // Reinicia animación
  reflejo.style.animation = "brillo 2s ease-in-out forwards";
});
