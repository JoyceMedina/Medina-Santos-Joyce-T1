import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor(
    private evento: EventosService,
    private route: Router
  ) { }

  informe(){
    const cantidad = this.evento.getCantidad()
    this.route.navigate(['/informe',cantidad])
  }

}
