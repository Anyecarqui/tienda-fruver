import { postData } from "../modules/postData.js";
//import { searchData } from "../modules/searchData";
import { showCard } from "../modules/showCard.js";
import { frutasyverduras } from "../scripts/constant.js";

import { getData } from "../modules/getData.js";

const fyvContainer = document.getElementById('displayfrutas-y-verduras');

document.addEventListener("DOMContentLoaded", async ()=> {
  
  const dataFrutasyVerduras = await getData('http://localhost:3000/frutasyverduras');

  showCard(fyvContainer, dataFrutasyVerduras);
})


const searchForm = document.getElementById('searchForm')

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const dataFrutasyVerduras = await getData();

  const searchValue = document.getElementById('searchInput').value;
  const filteredData = searchData(searchValue, dataFrutasyVerduras);
  
  if (filteredData.length > 0) {
    showCard(fyvContainer, filteredData);
  } else {
    fyvContainer.innerHTML = '<h2>No hay resultados para la búsqueda</h2>';
  }
  
})

const container = document.getElementById("containerCards");

document.addEventListener("DOMContentLoaded", async () => {
  const result = await getData(frutasyverduras);
  console.log(result);

   showCard(container, result);
 
});
