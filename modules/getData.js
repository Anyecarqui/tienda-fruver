//export const getData = async (url) => {
//    try {
  //    const {data} = await axios.get(url);
    //  console.log(data)
      //return data
    //} catch (error) {
      //console.log(error);
   // }
  //};
  export const getData = async (url) => {
    try {
      const respuesta = await fetch(url)
      const data = await respuesta.json();
      return data;
    } catch (error) {
      console.error("Ocurrió un error al realizar la petición GET: " + error)
    }
  }