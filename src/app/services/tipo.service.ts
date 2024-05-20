import { Injectable } from '@angular/core';
import { Tipo } from '../interfaces/tipo';

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  tipo: Tipo[] = [
    { id: 1, tipo: 'Reunión' },
    { id: 2, tipo: 'Conferencia' },
    { id: 3, tipo: 'Capacitación' },
    { id: 4, tipo: 'Presentación' },
    { id: 5, tipo: 'Seminario' },
    { id: 6, tipo: 'Taller' },
    { id: 7, tipo: 'Fiesta' },
    { id: 8, tipo: 'Celebración' },
    { id: 9, tipo: 'Competencia' },
    { id: 10, tipo: 'Entrevista' }
  ];

  constructor() { }

  getTipo(): Tipo[] {
    return this.tipo
  }

}
