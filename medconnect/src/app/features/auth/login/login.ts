import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {
  model = {
    email: '',
    password: '',
  };

  passwordVisible = false;

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  // submit: por ahora solo muestra en consola (sin funcionalidad backend)
  submit(form: NgForm) {
    if (form.invalid) {
      // marcar todos como touched para mostrar errores
      Object.values(form.controls).forEach(c => c.markAsTouched());
      return;
    }
    console.log('Login submit', this.model);
    // aquí integrarás el servicio de autenticación
  }

  // placeholder para navegar al registro (implementar en tu router)
  navigateToRegister() {
    console.log('navegar a registro');
  }

  forgotPassword() {
    console.log('abrir "recuperar contraseña"');
  }
}
