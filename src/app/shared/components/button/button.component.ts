import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() label!: string;
  @Output() clickEvent = new EventEmitter<void>();
}
