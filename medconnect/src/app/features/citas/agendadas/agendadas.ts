import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CitasAgendadasService, CitaAgendada } from '../../../core/services/citas-agendadas.service';

@Component({
  selector: 'app-citas-agendadas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agendadas.html',
  styleUrls: ['./agendadas.scss'],
})
export class CitasAgendadas implements OnInit {
  citas: CitaAgendada[] = [];

  modalVisible = false;
  citaSeleccionada: CitaAgendada | null = null;

  constructor(
    private readonly router: Router,
    private readonly citasService: CitasAgendadasService,
  ) {}

  ngOnInit() {
    this.citas = this.citasService.obtenerCitas();
  }

  abrirDetalle(cita: CitaAgendada) {
    this.citaSeleccionada = cita;
    this.modalVisible = true;
  }

  cerrarModal() {
    this.modalVisible = false;
    this.citaSeleccionada = null;
  }

  irAVideollamada() {
    this.router.navigate(['/videollamada']);
  }
}
