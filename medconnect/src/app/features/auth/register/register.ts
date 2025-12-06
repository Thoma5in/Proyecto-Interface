import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../../core/services/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class Register {
  step = 1;

  account = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(
    private readonly auth: Auth,
    private readonly router: Router,
  ) {}

  nextStep() {
    this.step = 2;
  }

  prevStep() {
    this.step = 1;
  }

  createAccount(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach(c => c.markAsTouched());
      return;
    }

    if (this.account.password !== this.account.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    this.auth.register(this.account.email, this.account.password);
    this.router.navigate(['/home']);
  }
}
