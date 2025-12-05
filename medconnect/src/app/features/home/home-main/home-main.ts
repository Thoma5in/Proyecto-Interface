import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home-main',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home-main.html',
  styleUrl: './home-main.scss',
})
export class HomeMain {

}
