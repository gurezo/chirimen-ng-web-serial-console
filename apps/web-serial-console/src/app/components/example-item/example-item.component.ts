import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ExampleItem } from '../../models';

@Component({
  selector: 'app-example-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example-item.component.html',
  styleUrl: './example-item.component.scss',
})
export class ExampleItemComponent {
  @Input() exampleItem!: ExampleItem;
}
