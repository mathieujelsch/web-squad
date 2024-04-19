import { Component } from '@angular/core';
import { BlueButtonComponent } from '../blue-button/blue-button.component';
import { WhiteButtonComponent } from '../white-button/white-button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BlueButtonComponent, WhiteButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
