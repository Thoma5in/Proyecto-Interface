import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videocall',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './videocall.html',
  styleUrls: ['./videocall.scss'],
})
export class Videocall {
  muted = false;
  cameraOn = true; // estado falso para prender/apagar cámara

  constructor (private router: Router) {}

  toggleMute() {
    this.muted = !this.muted;
  }

  toggleCamera() {
    this.cameraOn = !this.cameraOn;
  }

  colgar() {
    this.router.navigate(['/historial']);
  }
}
