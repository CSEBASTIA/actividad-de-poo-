import { Notificable } from "./inotificable";
import { Identificable } from "./interfaces";

export abstract class Persona implements Notificable, Identificable {
    private static contadorId = 0;
    private id: number;
    nombre: string;
    correo: string;

    constructor(nombre: string, correo: string) {
        this.nombre = nombre;
        this.correo = correo;
        this.id = ++Persona.contadorId;
    }

    getId(): number {
        return this.id;
    }

    notificar(mensaje: string): void {
        console.log(`📩 Notificación para ${this.nombre}: ${mensaje}`);
    }
}
