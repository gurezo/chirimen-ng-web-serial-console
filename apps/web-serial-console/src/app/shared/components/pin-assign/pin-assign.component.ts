import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../..';

@Component({
  selector: 'app-pin-assign',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  templateUrl: './pin-assign.component.html',
  styleUrl: './pin-assign.component.scss',
})
export class PinAssignComponent {}
