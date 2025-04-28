import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Maneja el cambio entre iniciar sesión y registrarse
const formContainer = document.getElementById("form-container");
const formTitle = document.getElementById("form-title");
const toggleForm = document.getElementById("toggle-form");
const submitBtn = document.getElementById("submit-btn");

let isSignUp = false;

toggleForm.addEventListener("click", () => {
  isSignUp = !isSignUp;
  formTitle.innerText = isSignUp ? "Registrarse" : "Iniciar Sesión";
  submitBtn.innerText = isSignUp ? "Registrarse" : "Iniciar Sesión";
  toggleForm.innerText = isSignUp
    ? "¿Ya tienes cuenta? Inicia Sesión"
    : "¿No tienes cuenta? Regístrate";
});

// Maneja la autenticación
submitBtn.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (isSignUp) {
    // Registro
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Usuario registrado con éxito");
      })
      .catch((error) => {
        alert(`Error al registrarse: ${error.message}`);
      });
  } else {
    // Inicio de sesión
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Inicio de sesión exitoso");
      })
      .catch((error) => {
        alert(`Error al iniciar sesión: ${error.message}`);
      });
  }
});
