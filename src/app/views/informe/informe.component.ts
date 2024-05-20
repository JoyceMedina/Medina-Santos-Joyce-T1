import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informe',
  standalone: true,
  imports: [],
  templateUrl: './informe.component.html',
  styleUrl: './informe.component.css'
})
export class InformeComponent implements OnInit {
  cantidadEventos: number = 0;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cantidadEventos = +this.route.snapshot.paramMap.get('value')!;
  }
}