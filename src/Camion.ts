import {Vehiculo} from "./Vehiculo";


export class Camion extends Vehiculo{

    private _tieneAcoplado: boolean = false;

    constructor(color: string,marca: string,velocidadMaxima: number,precio: number) {
        super(color,marca,velocidadMaxima,precio);
        
    }

    public get tieneAcoplado(): boolean {
        return this._tieneAcoplado;
    }
    public set tieneAcoplado(value: boolean) {
        this._tieneAcoplado = value;
    }
    
    public soyUnCamion():string
    {
        return "soy un camion";
    }
}