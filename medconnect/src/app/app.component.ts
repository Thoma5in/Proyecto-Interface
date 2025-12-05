import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../src/app/shared/components/header/header.component';
import { FooterComponent } from '../../src/app/shared/components/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('medconnect');
}
