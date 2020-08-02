export class Vehiculo
{
    private _color: string;

    private _marca: string;
   
    private _velocidadMaxima: number;

    private _precio: number;

    constructor(color: string,marca: string,velocidadMaxima: number,precio: number)
    {
        this._color = color;
        this._marca = marca;
        this._velocidadMaxima = velocidadMaxima;
        this._precio = precio;
    }
    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
    }
    public get marca(): string {
        return this._marca;
    }
    public set marca(value: string) {
        this._marca = value;
    }
    public get velocidadMaxima(): number {
        return this._velocidadMaxima;
    }
    public set velocidadMaxima(value: number) {
        this._velocidadMaxima = value;
    }
    public get precio(): number {
        return this._precio;
    }
    public set precio(value: number) {
        this._precio = value;
    }
    

}