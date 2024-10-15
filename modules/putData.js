export const putData =async(url)=>{
    try {
        const resp = await axios.put(url)
        alert("Se modifico exitosamente")        
        return resp.status
    }
    catch (error) {
        console.error(error)
    }
     
}
