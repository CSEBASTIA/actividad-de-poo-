import { Persona } from "./persona";

export class Gerente extends Persona {
    constructor(nombre: string, correo: string) {
        super(nombre, correo);
    }

    personalizarNotificacion(mensaje: string): void {
        console.log(`👨‍💼 Mensaje personalizado para el Gerente ${this.nombre}: ${mensaje.toUpperCase()}`);
    }
}
