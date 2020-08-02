import {Camion} from "./Camion";
//import Camion = require("Camion");

/** @description Esta CLase representa por donde inicia el programa,"llamada Main",su metodo es estatico y se inicia sin instanciar la clase".
 */
class Main 
{
    public static Main():void
    {
        let htmlElemento:HTMLElement = document.getElementById("texto") as HTMLElement;
        htmlElemento.textContent = "hola mundo desde Typescript en la pantalla usando Clases y el Método Main";
        let camion = new Camion("rojo","mercedes",130,100000);
        
        htmlElemento = document.getElementById("texto2") as HTMLElement;
        htmlElemento.textContent = "Caracteristicas del camion:" + " COLOR: " + camion.color + " MARCA: " + camion.marca + " PRESIO:" + camion.precio;
        

        console.log(camion.soyUnCamion());
        console.log("Funciona perfectamente la herencía");
    }

}



/** @description Uso el método main static para iniciar el programa ¡"NO BORRAR SINO NO INICIA"!".*/
Main.Main();

