import { Usuarios } from "../scripts/constant.js";
import { getData } from "../modules/getData.js";

const form = document.getElementById("formulario");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Traerme el json de usuarios para validar y buscar que el emil y el pass existan

  const response = await getData(Usuarios);
  console.log(response, email, password);
  const result = response.find(
    (user) => user.email === email && user.password === password
  );

  if (result !== undefined) {
    sessionStorage.setItem("profile", JSON.stringify(result));
    window.location.href =
      "../../pagina-principal/index.html";
  } else {
    alert("Email o Password Incorrectos");
  }
});