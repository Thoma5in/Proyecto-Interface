import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators,  ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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

  constructor(private fb: FormBuilder) {
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
      fecha: this.form.value.fecha
    };

    this.confirmacionVisible = true;
  }

  irVideollamada() {
    // ruta quemada
    window.location.href = "/videollamada";
  }
}
