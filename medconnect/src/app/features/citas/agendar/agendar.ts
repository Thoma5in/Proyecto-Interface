import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators,  ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CitasAgendadasService } from '../../../core/services/citas-agendadas.service';
@Component({
  selector: 'app-agendar',
  standalone: true,
  imports: [ CommonModule,
    ReactiveFormsModule,
    RouterModule],
  templateUrl: './agendar.html',
  styleUrls: ['./agendar.scss'],
})
export class Agendar {
  form;

  constructor(
    private fb: FormBuilder,
    private readonly citasService: CitasAgendadasService,
  ) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      tipoDocumento: ['', [Validators.required]],
      cedula: ['', [Validators.required, Validators.pattern(/^[0-9]{1,10}$/)]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{1,10}$/)]],
      correo: ['', [Validators.required, Validators.email]],
      fecha: ['', [Validators.required]],
      especialidad: ['', [Validators.required]],
    });
  }

  confirmacionVisible = false;
  datosConfirmacion: any = {};

  enviar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.datosConfirmacion = {
      nombre: this.form.value.nombre,
      cedula: this.form.value.cedula,
      fecha: this.form.value.fecha,
      especialidad: this.form.value.especialidad,
    };

    // Registrar la cita en el servicio de citas agendadas
    this.citasService.agregarCita({
      paciente: (this.form.value.nombre ?? '').toString(),
      doctor: 'Dr. Juan Pérez',
      especialidad: (this.form.value.especialidad ?? '').toString(),
      fecha: (this.form.value.fecha ?? '').toString(),
    });

    this.confirmacionVisible = true;
  }

  irVideollamada() {
    // ruta quemada
    window.location.href = "/videollamada";
  }

  irCitasAgendadas() {
    // ruta quemada a la sección de citas agendadas
    window.location.href = "/citas/agendadas";
  }
}
