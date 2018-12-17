class Producto {
    constructor(item,cantidad,precioUnidad,marca){
        this.item=item;
        this.cantidad=cantidad;
        this.precioUnidad=precioUnidad;
        this.marca=marca;
    }
    devolverTRProducto(){
        let tr=document.createElement("TR");
        tr.innerHTML=`<th>
                ${this.item}
                </th>
                <tr>
                    ${this.cantidad}
                </tr>
                <tr>
                     ${this.precioUnidad} &euro;
                </tr>
                <tr>
                    ${this.marca}
                </tr>`
        return tr;
    }
}