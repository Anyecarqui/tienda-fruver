export const deleteData = async (url) => {
    try {
    await axios.delete(url);
      alert("Se Eliminó exitosamente");   
      sessionStorage.clear()
      window.location.href="../pagina-pricipal/index.html"
    } catch (error) {
      console.error(error);
    }
  };