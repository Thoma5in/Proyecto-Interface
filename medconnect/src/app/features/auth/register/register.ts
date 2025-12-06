import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class Register {
  step = 1;

  nextStep() {
    this.step = 2;
  }

  prevStep() {
    this.step = 1;
  }
}
