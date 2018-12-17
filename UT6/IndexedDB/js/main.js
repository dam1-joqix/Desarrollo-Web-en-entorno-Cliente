//TODO: Ejemplo 5: Inicializar la base de datos

//Abrir una base de datos "Ejemplo" y dentro el almacen "productos":
function openDatabase() {
    return new Promise((resolve, reject) => {
        let openReq = indexedDB.open('Ejemplo', 1); //OJO CON LA VERSIÓN!!!!
        openReq.addEventListener('upgradeneeded', e => { //No estamos en la versión.
            let db = e.target.result;
            if (!db.objectStoreNames.contains('products')) { // No existe "productos"
                //Creamos el almacén de datos:
                db.createObjectStore('products', { autoIncrement: true, keyPath: 'id' });
            }
            //resolve(db); //No hace falta ponerlo!!!
        });
        openReq.addEventListener('success', e => { // OK!
            resolve(e.target.result); // Devolvemos la base de datos.
        });
        openReq.addEventListener('error', e => reject('Error al abrir'));
        openReq.addEventListener('blocked', e => reject('BD ya en uso'));
    }); }
    /* comentar para que borre
openDatabase().then(db => {
    console.log(db)
});*/


//TODO: Ejemplo 6: Borrar la base de datos
function deleteDatabase() {
    return new Promise((resolve, reject) => {
        let deleteReq = indexedDB.deleteDatabase('Ejemplo');
        deleteReq.addEventListener('success', e => resolve()); // Borrada
        deleteReq.addEventListener('error', e => reject('Error al borrar')); // Error
        deleteReq.addEventListener('blocked', e => reject('Cerrar antes!!')); // Error
    });
}

/*//Modificamos nuestra estructura de manejo:
openDatabase().then(db => {
    // ... Operaciones
    db.close(); // Esta llamada es síncrona
    //Manejamos la eliminación //Ojo sólo si es necesario eliminarla.
    return deleteDatabase()
}).then(() =>{
    console.log('Base de datos borrada')
}).catch(error =>{
    console.log(error);
});
*/




//TODO: Ejemplo 9: Insertar un objeto.

function insertProduct(db, producto) {
    let store = db.transaction('products', 'readwrite').objectStore('products');
    let addReq = store.add(producto );
    return new Promise((resolve, reject) => {
        addReq.addEventListener('success', e => resolve(e.target.result)); // Devuelve el producto insertado
        addReq.addEventListener('error', e => reject('No se puede añadir el producto'));
    });
}
/*
//Ejemplo de uso:
let esp={nombre:"spain",signo:"ES"};
openDatabase().then(database => {
    db = database;
    return insertProduct(db, /*{ item: "Raquetas", cantidad: 10, precioUnidad: "55", marca: "Wilson" }*//*{ nombre: "PEPE", edad: 18, direccion:{calle:"falsa",numero:123},pais:esp});
}).catch(error =>{
    console.log(error);
});
*/
//TODO: Ejemplo 7: Listar todos los objetos
function getAllProducts(db) {
    let store = db.transaction('products', 'readonly').objectStore('products');
    let getReq = store.getAll();
    return new Promise((resolve, reject) => {
        //Si se pueden obtener todos los objetos, los devuelve.
        getReq.addEventListener('success', e => resolve(e.target.result)); // Ok!
        getReq.addEventListener('error', e => reject('Error al obtener productos'));
    });
}
//Ejemplo de uso:
let db;
openDatabase().then(database => {
    db = database;
    return getAllProducts(db);
}).then(productos=>{
    //Hacer lo que sea con los productos...
    for(let producto of productos){
        console.log(producto);
    }
    db.close();
}).catch(error =>{
    console.log(error);
});


//TODO: Ejemplo 8: Buscar por ID
function getProduct(db,key) {
    let store = db.transaction('products', 'readonly').objectStore('products');
    let getReq = store.get(key);
    return new Promise((resolve, reject) => {
        getReq.addEventListener('success', e => resolve(e.target.result)); // Devuelve el objeto
        getReq.addEventListener('error', e => reject(`No se puede obtener el producto ${key}`));
    });
}
//Ejemplo de uso:
//let db;
openDatabase().then(database => {
    db = database;
    return getProduct(db,1);
}).then(producto=>{
    //Hacer lo que sea con el producto...
    console.log(producto); //Si no hay, undefined
    db.close();
}).catch(error =>{
    console.log(error);
});


//TODO: Ejemplo 10: Actualizar un objeto.
function updateProduct(db, product, key = null) {
    let store = db.transaction('products', 'readwrite').objectStore('products');
    //La key es necesaria cuando el almacén no tiene "keypath"
    let updateReq = key ? store.put(product, key) : store.put(product);

    return new Promise((resolve, reject) => {
        updateReq.addEventListener('success', e => resolve(e.target.result)); // Devuelve el producto.
        updateReq.addEventListener('error', e => reject("No se puede actualizar el producto"));
    });
}

/*
//Ejemplo de uso:
openDatabase().then(database => {
    db = database;
    //OJO!!! Actualizamos el primero
    return updateProduct(db, { item: "Raquetas", cantidad: 14, precioUnidad: "51", marca: "Wilson",id:1 });
}).catch(error =>{
    console.log(error);
});
*/
//TODO: Ejemplo 11: Eliminar un objeto.

function deleteProduct(db, key) {
    let store = db.transaction('products', 'readwrite').objectStore('products');
    let delReq = store.delete(key);

    return new Promise((resolve, reject) => {
        delReq.addEventListener('success', e => resolve());
        delReq.addEventListener('error', e => reject(`No se puede eliminar ${key}`));
    });
}

//Ejemplo de uso:
openDatabase().then(database => {
    db = database;
    return deleteProduct(db, 1);
}).catch(error =>{
    console.log(error);
});
