import { Component } from '@angular/core';
import { SimulationCardComponent } from '../simulation-card/simulation-card.component';
import { LightButtonComponent } from '../light-button/light-button.component';

@Component({
  selector: 'app-simulation-type-banner',
  standalone: true,
  imports: [SimulationCardComponent, LightButtonComponent],
  templateUrl: './simulation-type-banner.component.html',
  styleUrl: './simulation-type-banner.component.scss'
})
export class SimulationTypeBannerComponent {

}
