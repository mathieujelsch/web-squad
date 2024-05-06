import { Component } from '@angular/core';
import { LightButtonComponent } from '../light-button/light-button.component';

@Component({
  selector: 'app-situation-card',
  standalone: true,
  imports: [LightButtonComponent],
  templateUrl: './situation-card.component.html',
  styleUrl: './situation-card.component.scss'
})
export class SituationCardComponent {

}
