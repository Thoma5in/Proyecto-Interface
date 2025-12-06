import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../../core/services/auth';

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

  constructor(
    private readonly auth: Auth,
    private readonly router: Router,
  ) {}

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
    const ok = this.auth.login(this.model.email, this.model.password);
    if (ok) {
      this.router.navigate(['/home']);
    } else {
      alert('Usuario no encontrado. Regístrate primero.');
    }
  }

  // placeholder para navegar al registro (implementar en tu router)
  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  forgotPassword() {
    console.log('abrir "recuperar contraseña"');
  }
}
