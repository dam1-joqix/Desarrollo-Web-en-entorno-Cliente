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
                <td>
                    ${this.cantidad}
                </td>
                <td>
                     ${this.precioUnidad} &euro;
                </td>
                <td>
                    ${this.marca}
                </td>`;
        return tr;
    }
}