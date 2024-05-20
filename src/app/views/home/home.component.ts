import { Component, OnInit, Type } from '@angular/core';
import { TipoService } from '../../services/tipo.service';
import { Tipo } from '../../interfaces/tipo';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastService } from '../../services/toast.service';
import { Evento } from '../../interfaces/evento';
import { EventosService } from '../../services/eventos.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  public tipos: Tipo[] = []
  public form!: FormGroup

  constructor(
    private tipoServicio: TipoService,
    private eventoServicio: EventosService,
    private toast: ToastService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.cargarTipos();
  }

  private inicializarFormulario(): void {
    this.form = this.fb.group({
      ubicacion: ['', Validators.required],
      capacidad: ['', Validators.required],
      fecha: ['', Validators.required],
      duracion: ['', Validators.required],
      tipo: ['', Validators.required]
    });
  }

  private cargarTipos(): void {
    this.tipos = this.tipoServicio.getTipo();
  }

  registrar() {
    if(this.form.invalid){
      this.toast.error('Campos vacíos')
      return
    }

    const evento: Evento = {
      ubicacion: this.form.value.ubicacion,
      capacidad: this.form.value.capacidad,
      fecha: this.form.value.fecha,
      duracion: this.form.value.duracion,
      tipo: this.form.value.tipo
    }

    this.eventoServicio.insertEvento(evento)
    this.form.reset()
    this.toast.success('Registrado con éxtio')
  }


}
