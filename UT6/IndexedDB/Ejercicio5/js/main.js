let productostable=document.querySelector("#productos");

let formulario=document.querySelector("#formulario");
let item=document.querySelector("#item");
let cantidad=document.querySelector("#cantidad");
let precio=document.querySelector("#precio");
let marca=document.querySelector("#marca");

function getAllProducts(db) {
    let store = db.transaction('productos', 'readonly').objectStore('productos');
    let getReq = store.getAll();
    return new Promise((resolve, reject) => {
        //Si se pueden obtener todos los objetos, los devuelve.
        getReq.addEventListener('success', e => resolve(e.target.result)); // Ok!
        getReq.addEventListener('error', e => reject('Error al obtener productos'));
    });
}



//Abrir una base de datos "Ejemplo" y dentro el almacen "productos":
function openDatabase() {
    return new Promise((resolve, reject) => {
        let openReq = indexedDB.open('Productos', 1); //OJO CON LA VERSIÓN!!!!
        openReq.addEventListener('upgradeneeded', e => { //No estamos en la versión.
            let db = e.target.result;
            if (!db.objectStoreNames.contains('productos')) { // No existe "productos"
                //Creamos el almacén de datos:
                db.createObjectStore('productos', { autoIncrement: true, keyPath: 'id' });
            }
            //resolve(db); //No hace falta ponerlo!!!
        });
        openReq.addEventListener('success', e => { // OK!
            resolve(e.target.result); // Devolvemos la base de datos.
        });
        openReq.addEventListener('error', e => reject('Error al abrir'));
        openReq.addEventListener('blocked', e => reject('BD ya en uso'));
    }); }
let db;
openDatabase().then(database => {
    db = database;
    return getAllProducts(db);
}).then(productos=>{
    //Hacer lo que sea con los productos...
    let hay=false;
    productostable.innerHTML=` <tr>
                <th>
                    Item
                </th>
                <th>
                    Cantidad
                </th>
                <th>
                    Precio Unidad
                </th>
                <th>
                    Marca
                </th>
            </tr>`;
    for(let producto of productos){
        console.log(producto);
        let prod=new Producto(producto.producto.item,producto.producto.cantidad,producto.producto.precioUnidad,producto.producto.marca);
        productostable.appendChild(prod.devolverTRProducto());
        hay=true;
    }
    db.close();
    if(!hay){
        productostable.innerHTML("<tr><th colspan='4'>No hay productos</th> </tr>")
    }
}).catch(error =>{
    console.log(error);
});


//TODO: Ejemplo 9: Insertar un objeto.

function insertProduct(db, producto) {
    let store = db.transaction('productos', 'readwrite').objectStore('productos');
    let addReq = store.add(producto );
    return new Promise((resolve, reject) => {
        addReq.addEventListener('success', e => resolve(e.target.result)); // Devuelve el producto insertado
        addReq.addEventListener('error', e => reject('No se puede añadir el producto'));
    });
}


formulario.onsubmit=function (event) {
    let db2;
    openDatabase().then(database => {
        db2 = database;
        let producto=new Producto(item.value,cantidad.value,precio.value,marca.value);
        return insertProduct(db2, { producto });
    }).catch(error =>{
        console.log(error);
    });
};