function comprar (producto){
    let memoria = localstorage.getItem("frutas y verduras");
    If (!memoria); {
    let nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    Localstorage.setItem("frutasyverduras", JSON.stringify(nuevoproducto));
    }
}