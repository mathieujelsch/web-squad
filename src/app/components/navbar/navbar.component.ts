import { Component, EventEmitter, Output } from '@angular/core';
import { BlueButtonComponent } from '../blue-button/blue-button.component';
import { WhiteButtonComponent } from '../white-button/white-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BlueButtonComponent, WhiteButtonComponent, MatIconModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatListModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Output() openSideNav = new EventEmitter()

}
