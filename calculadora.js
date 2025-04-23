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

// SE AÑADE BOTONES CIENTIFICOS (EN DESARROLLO)

const pantalla = document.getElementById('pantalla');

function insertar(valor) {
  pantalla.value += valor;
}

function limpiar() {
  pantalla.value = '';
}

function borrar() {
  pantalla.value = pantalla.value.slice(0, -1);
}

function calcular() {
  try {
    let expresion = pantalla.value
      .replace(/pi/g, 'Math.PI')
      .replace(/e/g, 'Math.E')
      .replace(/sin\(/g, 'Math.sin(toRadian(')
      .replace(/cos\(/g, 'Math.cos(toRadian(')
      .replace(/tan\(/g, 'Math.tan(toRadian(')
      .replace(/log\(/g, 'Math.log10(')
      .replace(/sqrt\(/g, 'Math.sqrt(')
      .replace(/\^/g, '**');

    const toRadian = (deg) => deg * (Math.PI / 180);
    pantalla.value = eval(`(function() { const toRadian = ${toRadian.toString()}; return ${expresion}; })()`);
  } catch (e) {
    pantalla.value = 'Error';
  }
}