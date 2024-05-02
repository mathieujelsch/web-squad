import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomePanelComponent } from './components/welcome-panel/welcome-panel.component';
import { ImagePanelComponent } from './components/image-panel/image-panel.component';
import { HomeComponent } from './components/home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent, 
    HomeComponent, 
    MatSidenavModule, 
    MatIcon, 
    MatMenuModule, 
    MatMenuTrigger, 
    MatMenu, 
    MatListModule,
    MatExpansionModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('expandCollapse', [
      state('open', style({
        height: '*',
        opacity: 1
      })),
      state('closed', style({
        height: '0px',
        opacity: 0
      })),
      transition('open <=> closed', [
        animate('0.6s ease-in-out')
      ]),
    ]),
  ]
})
export class AppComponent {
  title = 'jesper';

  isSubmenuOpen = false;
  isSubmenuGuideOpen = false;

  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }

  toggleSubmenuGuide() {
    this.isSubmenuGuideOpen = !this.isSubmenuGuideOpen;
  }
  
}
