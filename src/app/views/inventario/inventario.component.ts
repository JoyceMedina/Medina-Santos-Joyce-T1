import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../interfaces/evento';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent implements OnInit {

  eventos: Evento[] = []

  constructor(private eventoServive: EventosService) { }

  ngOnInit(): void {
    this.eventos = this.eventoServive.getEventos()
  }

}
