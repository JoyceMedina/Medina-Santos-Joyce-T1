import { Injectable } from '@angular/core';
import { Evento } from '../interfaces/evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  eventos: Evento[] = []

  constructor() { }

  insertEvento(evento: Evento): void {
    this.eventos.push(evento)
  }

  getEventos(): Evento[] {
    return this.eventos
  }

  getCantidad(): number {
    return this.eventos.length
  }

}
