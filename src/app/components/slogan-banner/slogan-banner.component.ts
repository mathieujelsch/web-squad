import { Component } from '@angular/core';
import { DarkBlueCardComponent } from '../dark-blue-card/dark-blue-card.component';

@Component({
  selector: 'app-slogan-banner',
  standalone: true,
  imports: [DarkBlueCardComponent],
  templateUrl: './slogan-banner.component.html',
  styleUrl: './slogan-banner.component.scss'
})
export class SloganBannerComponent {

}
