import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blue-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blue-button.component.html',
  styleUrl: './blue-button.component.scss'
})
export class BlueButtonComponent {
  @Input()
  taille!: string;
}
