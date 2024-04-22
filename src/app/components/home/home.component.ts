import { Component } from '@angular/core';
import { WelcomePanelComponent } from '../welcome-panel/welcome-panel.component';
import { ImagePanelComponent } from '../image-panel/image-panel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomePanelComponent, ImagePanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
