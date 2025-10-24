import { Persona } from "./persona";

export class Desarrollador extends Persona {
    lenguajePrincipal: string;

    constructor(nombre: string, correo: string, lenguajePrincipal: string) {
        super(nombre, correo);
        this.lenguajePrincipal = lenguajePrincipal;
    }
}
