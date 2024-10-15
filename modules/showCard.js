const endpointUrl = "http://localhost:3000/frutasyverduras"

export const showCard = (fyvContainer, dataFrutasyVerduras) => {
  dataFrutasyVerduras?.forEach((element) => {
    const { id, name, image, description, categorie, price, discount } = element;
    console.log(fyvContainer)
    fyvContainer.innerHTML += `    
       <div class="card text-center my-3" >
            <img id=${id} data-bs-toggle="modal" data-bs-target="#exampleModal${id}" src=${image} class="card-img-top d-block m-auto w-15" />
            <div class="card-body">
            <h4><del>${discount}</del></h4>
              <h5 class="card-title">${name}</h5>
             <h6>${price}</h6>
                  <h6>${categorie}</h6>
              <button type="button"  class="btn d-block btn-success" id=${id} data-bs-toggle="modal" data-bs-target="#exampleModal${id}"
                ><i class="bi bi-star text-light"> Detalle </i></button>
                
            </div>
          </div>     
       
    
       <div class="modal fade" id="exampleModal${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">${name}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               
              </div>
              <div class="modal-body">
             <img src=${image} class="card-img-top d-block m-auto w-25" alt="..." />
              <u>${discount}</u> 
             <p>${description}</p>
                  <h6>${price}</h6>
                  <h6>${categorie}</h6>
                 <button type="button"  class="btn d-block btn-success" id=${id} data-bs-toggle="modal" data-bs-target="#exampleModal${id}"
                ><i class="bi bi-star text-light"> Comprar </i></button>
                  

              </div>
              
              <div class="modal-body">
              <h5>Otros productos <h5>
             <img src=${image} class="card-img-top d-block m-auto w-25" alt="..." />
             <img src=${image} class="card-img-top d-block m-auto w-25" alt="..." />
             <img src=${image} class="card-img-top d-block m-auto w-25" alt="..." />
                  <h4><del>${discount}</del></h4>
             <h6>${price}</h6>
                  <h6>${categorie}</h6>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div> 
        </div>
  
   `;
  })
};
