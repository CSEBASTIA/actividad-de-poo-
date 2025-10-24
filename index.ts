import { Desarrollador } from "./desarrollador";
import { Gerente } from "./gerente";
import { Proyecto } from "./proyecto";
import { Tarea } from "./tarea";

const gerente = new Gerente("Laura Gómez", "laura@empresa.com");
const dev1 = new Desarrollador("Carlos Ruiz", "carlos@empresa.com", "TypeScript");
const dev2 = new Desarrollador("Ana Pérez", "ana@empresa.com", "Python");

const proyecto = new Proyecto("Sistema Interno", "Administración de proyectos internos");

proyecto.agregarMiembro(gerente);
proyecto.agregarMiembro(dev1);
proyecto.agregarMiembro(dev2);

const tarea1 = new Tarea("Diseñar base de datos", "Crear modelo relacional");
const tarea2 = new Tarea("Implementar API", "Desarrollar endpoints con Express");

proyecto.agregarTarea(tarea1);
proyecto.agregarTarea(tarea2);

tarea1.actualizarEstado("En progreso")

gerente.personalizarNotificacion("Revisar avances del proyecto.");
dev1.notificar("Sube tus cambios al repositorio.");
