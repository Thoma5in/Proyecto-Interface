import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class Register {
  step = 1; // 1 = datos personales, 2 = credenciales

  nextStep() {
    this.step = 2;
  }

  prevStep() {
    this.step = 1;
  }
}
