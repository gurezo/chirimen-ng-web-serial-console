import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-item.component.html',
  styleUrl: './example-item.component.scss',
})
export class ExampleItemComponent {}
