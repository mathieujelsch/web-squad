import { Component } from '@angular/core';
import { SituationCardComponent } from '../situation-card/situation-card.component';

@Component({
  selector: 'app-situation-banner',
  standalone: true,
  imports: [SituationCardComponent],
  templateUrl: './situation-banner.component.html',
  styleUrl: './situation-banner.component.scss'
})
export class SituationBannerComponent {

}
