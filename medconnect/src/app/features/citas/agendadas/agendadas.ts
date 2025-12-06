import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface CitaAgendada {
  id: number;
  paciente: string;
  doctor: string;
  especialidad: string;
  fecha: string;
}

@Component({
  selector: 'app-citas-agendadas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agendadas.html',
  styleUrls: ['./agendadas.scss'],
})
export class CitasAgendadas {
  citas: CitaAgendada[] = [
    {
      id: 1,
      paciente: 'Juan Demo',
      doctor: 'Dr. Juan Pérez',
      especialidad: 'Medicina general',
      fecha: '2025-12-06 · 10:30 AM',
    },
  ];

  modalVisible = false;
  citaSeleccionada: CitaAgendada | null = null;

  constructor(private router: Router) {}

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
