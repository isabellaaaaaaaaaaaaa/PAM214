/*const persona = {
    nombre : "Isabella",
    edad: 18,
    direccion: {
        ciudad: "Qro",
        pais: "MX"
    }
};

const {nombre, edad, direccion:{ciudad}} = persona;
console.log  ("Me llamo " + nombre + ", tengo " + edad + " años y vivo en " + ciudad);*/

const productos = [
    { nombre: "Laptop", precio: 12000 },
    { nombre: "Mouse", precio: 250 },
    { nombre: "Teclado", precio: 750 },
    { nombre: "Monitor", precio: 3000}
];

const precio = productos.filter (productos => productos.precio > 1000)
.map( producto => producto.nombre);
console.log (precio);