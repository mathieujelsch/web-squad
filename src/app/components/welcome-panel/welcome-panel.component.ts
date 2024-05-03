import { Component } from '@angular/core';
import { BlueButtonComponent } from '../blue-button/blue-button.component';
import { LightButtonComponent } from '../light-button/light-button.component';

@Component({
  selector: 'app-welcome-panel',
  standalone: true,
  imports: [BlueButtonComponent, LightButtonComponent],
  templateUrl: './welcome-panel.component.html',
  styleUrl: './welcome-panel.component.scss'
})
export class WelcomePanelComponent {

}
