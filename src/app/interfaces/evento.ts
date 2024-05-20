import { Tipo } from "./tipo"

export interface Evento {
    ubicacion: string
    capacidad: number,
    fecha: Date
    duracion: string
    tipo: Tipo
}
