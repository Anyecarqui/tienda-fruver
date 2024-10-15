import { postData } from "../modules/postData.js";
import { Usuarios } from "../scripts/constant.js";


const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let objUsuarios = {
    id: Math.floor(Math.random() * 100),
    name,
    email,
    password,
  };
  console.log(objUsuarios);


  
  postData(Usuarios, objUsuarios)
});
