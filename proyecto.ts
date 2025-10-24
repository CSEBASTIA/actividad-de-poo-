import { Persona } from "./persona";
import { Tarea } from "./tarea";

export class Proyecto {
    nombre: string;
    descripcion: string;
    miembros: Persona[];
    tareas: Tarea[];

    constructor(nombre: string, descripcion: string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.miembros = [];
        this.tareas = [];
    }

    agregarMiembro(p: Persona): void {
        this.miembros.push(p);
        console.log(`👥 Se agregó al miembro: ${p.nombre}`);
    }

    agregarTarea(t: Tarea): void {
        this.tareas.push(t);
        console.log(`🧾 Tarea añadida: ${t.titulo}`);
    }
}
