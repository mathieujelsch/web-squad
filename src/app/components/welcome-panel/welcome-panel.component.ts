import { Component } from '@angular/core';
import { BlueButtonComponent } from '../blue-button/blue-button.component';

@Component({
  selector: 'app-welcome-panel',
  standalone: true,
  imports: [BlueButtonComponent],
  templateUrl: './welcome-panel.component.html',
  styleUrl: './welcome-panel.component.scss'
})
export class WelcomePanelComponent {

}
