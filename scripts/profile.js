import { Usuarios } from "../scripts/constant.js";
import { deleteData } from "../modules/deleteData.js";
import { putData } from "../modules/putData.js";


document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("form");
  const profile = JSON.parse(sessionStorage.getItem("profile")) 

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const btnEdit = document.getElementById('editar');
  const btnDelete = document.getElementById('eliminar');
  const btnSave = document.getElementById('guardar');
console.log(profile)
  
name.value = profile.name;
  email.value = profile.email;
  password.value = profile.password;

  //habilitar input y botones

  btnEdit.addEventListener("click", function () {
    btnSave.classList.remove("d-none");
    btnEdit.classList.add("d-none");
    name.removeAttribute("disabled");
    email.disabled = false;
    password.disabled = false;
  });


btnDelete.addEventListener("dblclick", function (e) {
      e.preventDefault();
      deleteData(`${USER}/${profile.id}`).then(()=> {
        window.location.href ="../../pagina-principal/index.html"
      })
})


  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    let objUsuarios = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    // modificar el usuario
    const resp = await putData(`${Usuarios}/${profile.id}`, objUsuarios);

   if (resp === 200){

   }
   });
 });
