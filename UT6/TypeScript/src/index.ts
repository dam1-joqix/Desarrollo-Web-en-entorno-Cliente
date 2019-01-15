/**Ejercicio 1**/
let a:string;
let b:number;
let c:boolean[];
let d:any;
let e:boolean[];
let f:(a:any)=>number;
let g:(nombre:string,edad:number,casado:boolean)=>void;
let h:(a:string,b:string,c?:string)=>string;
/**Ejercicio 2**/
class Punto2D {
    private x:number;
    private y:number;
    constructor(x:number,y:number){
        this.x=x;
        this.y=y;
    }

    getX(): number {
        return this.x;
    }

    setX(value: number) {
        this.x = value;
    }

    getY(): number {
        return this.y;
    }

    setY(value: number) {
        this.y = value;
    }
    public toString(): string {
        return `(${this.getX()},${this.getY()})`;
    }
}
let punto1=new Punto2D(2,3);
let punto2=new Punto2D(5,8);
let distancia:(p1:Punto2D,p2:Punto2D)=>number;
distancia=function (p1:Punto2D,p2:Punto2D) {
    let d=Math.sqrt(
        Math.pow((punto2.getX()-punto1.getX()),2)+
        Math.pow((punto2.getY()-punto1.getY()),2));
    return d;
};
alert(`La distancia entre ${punto1} y ${punto2} es ${distancia(punto1,punto2)}`);