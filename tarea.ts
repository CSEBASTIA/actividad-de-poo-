export class Tarea {
    titulo: string;
    descripcion: string;
    estado: string;

    constructor(titulo: string, descripcion: string, estado: string = "Pendiente") {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
    }

    actualizarEstado(nuevoEstado: string): void {
        console.log(`🔄 Estado de la tarea "${this.titulo}" actualizado a: ${nuevoEstado}`);
        this.estado = nuevoEstado;
    }
}
